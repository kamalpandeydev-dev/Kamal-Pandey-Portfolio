// ./components/TabsContainer.jsx
import React, { useEffect, useRef, useState } from 'react';

/**
 * Tab (declarative child)
 * Usage:
 *  <TabsContainer>
 *    <Tab label="One">...</Tab>
 *    <Tab label="Two">...</Tab>
 *  </TabsContainer>
 */
export const Tab = ({ label, children }) => {
  // Tab is only a marker for declarative usage and is processed by TabsContainer
  return <>{children}</>;
};

export default function TabsContainer({
  // Either supply `tabs` as [{ label, content, id? }, ...]
  // or supply children as <Tab label="...">...</Tab>
  tabs = null,
  children = null,
  defaultIndex = 0,
  onChange = null,
  className = '',
  idPrefix = 'tabs',
}) {
  // Normalize tabs: prefer `tabs` prop; otherwise read children (Tab)
  const normalizedTabs = React.useMemo(() => {
    if (Array.isArray(tabs) && tabs.length) {
      return tabs.map((t, i) => ({
        label: t.label ?? `Tab ${i + 1}`,
        content: t.content ?? null,
        id: t.id ?? `${idPrefix}-item-${i}`,
      }));
    }

    // Parse children that are <Tab label="...">content</Tab>
    const parsed = [];
    React.Children.forEach(children, (child, i) => {
      if (!React.isValidElement(child)) return;
      const label = child.props.label ?? `Tab ${i + 1}`;
      parsed.push({
        label,
        content: child.props.children ?? null,
        id: child.props.id ?? `${idPrefix}-item-${i}`,
      });
    });
    return parsed;
  }, [tabs, children, idPrefix]);

  const tabsCount = normalizedTabs.length;
  const safeDefault = Math.min(Math.max(0, defaultIndex), Math.max(0, tabsCount - 1));
  const [activeIndex, setActiveIndex] = useState(safeDefault);

  // Refs for keyboard focus control
  const tabRefs = useRef([]);
  tabRefs.current = Array(tabsCount)
    .fill(null)
    .map((_, i) => tabRefs.current[i] || React.createRef());

  useEffect(() => {
    if (typeof onChange === 'function') onChange(activeIndex);
  }, [activeIndex, onChange]);

  // When tabs change length, ensure activeIndex in range
  useEffect(() => {
    if (activeIndex >= tabsCount && tabsCount > 0) {
      setActiveIndex(tabsCount - 1);
    }
  }, [tabsCount]); // eslint-disable-line react-hooks/exhaustive-deps

  const focusTab = (index) => {
    const ref = tabRefs.current?.[index];
    if (ref && ref.current) ref.current.focus();
  };

  const handleKeyDown = (event, index) => {
    if (tabsCount === 0) return;
    const key = event.key;

    switch (key) {
      case 'ArrowRight': {
        event.preventDefault();
        const next = (index + 1) % tabsCount;
        focusTab(next);
        break;
      }
      case 'ArrowLeft': {
        event.preventDefault();
        const prev = (index - 1 + tabsCount) % tabsCount;
        focusTab(prev);
        break;
      }
      case 'Home': {
        event.preventDefault();
        focusTab(0);
        break;
      }
      case 'End': {
        event.preventDefault();
        focusTab(tabsCount - 1);
        break;
      }
      case 'Enter':
      case ' ': {
        // Space or Enter activates the focused tab
        event.preventDefault();
        setActiveIndex(index);
        break;
      }
      default:
        break;
    }
  };

  if (tabsCount === 0) {
    return null;
  }

  return (
    <div className={`tabs-container ${className}`} role="region" aria-labelledby={`${idPrefix}-label`}>
      {/* Tab list */}
      <div role="tablist" aria-label="Tabs" className="tab-list" aria-orientation="horizontal">
        {normalizedTabs.map((t, i) => {
          const selected = i === activeIndex;
          return (
            <button
              key={t.id}
              id={`tab-${t.id}`}
              ref={tabRefs.current[i]}
              role="tab"
              aria-selected={selected}
              aria-controls={`panel-${t.id}`}
              tabIndex={selected ? 0 : -1}
              className={`tab ${selected ? 'tab--active' : ''}`}
              onClick={() => setActiveIndex(i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              type="button"
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Panels */}
      <div className="tab-panels">
        {normalizedTabs.map((t, i) => {
          const hidden = i !== activeIndex;
          return (
            <section
              key={t.id}
              id={`panel-${t.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${t.id}`}
              hidden={hidden}
              className="tab-panel"
            >
              {/* Render only the active panel's content for performance */}
              {i === activeIndex ? t.content : null}
            </section>
          );
        })}
      </div>
    </div>
  );
}
