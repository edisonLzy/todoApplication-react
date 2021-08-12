import { ReactNode, useRef, useState } from 'react';
import { Switch } from 'react-router';
import {
  CSSTransition,
  SwitchTransition,
  TransitionGroup,
} from 'react-transition-group';
export interface ShareElementType {
  shrinkEl: ReactNode;
  expandEl: ReactNode;
  type?: 'expand' | 'shrink';
}

const defaultSize = { top: 0, left: 0, width: 0, height: 0 };
export default function ShareElement({
  shrinkEl,
  expandEl,
}: //   type,
ShareElementType) {
  const [type, setType] = useState<ShareElementType['type']>('shrink');
  const shrinkElRef = useRef(defaultSize);
  return (
    <div
      onClick={() => {
        if (type === 'shrink') {
          setType('expand');
        } else {
          setType('shrink');
        }
      }}
    >
      <SwitchTransition>
        <CSSTransition
          appear
          timeout={200}
          key={type}
          addEndListener={(node, done) => {
            node.addEventListener('transitionend', done, false);
          }}
          onEnter={(node, isAppearing) => {
            if (isAppearing && type === 'shrink') {
              const { top, left, width, height } = node.getBoundingClientRect();
              shrinkElRef.current = { top, left, width, height };
            }
            if (type === 'expand') {
              const { top, left, width, height } = shrinkElRef.current;
              Object.assign(node.style, {
                position: 'fixed',
                width: `${width}px`,
                top: `${top}px`,
                height: `${height}px`,
                left: `${left}px`,
              });
            }
          }}
          onEntering={(node, isAppearing) => {
            if (type === 'expand') {
              Object.assign(node.style, {
                transition: 'all .2s ease',
              });
            }
          }}
          onEntered={(node, isAppearing) => {
            if (type === 'expand') {
              Object.assign(node.style, {
                width: '100%',
                height: '100%',
                left: '0px',
                top: '0px',
              });
            }
          }}
          onExiting={(node) => {
            if (type === 'expand') {
              Object.assign(node.style, {
                transition: 'all .2s ease',
              });
            }
          }}
          onExited={(node) => {
            if (type === 'expand') {
              const { top, left, width, height } = shrinkElRef.current;
              Object.assign(node.style, {
                position: 'fixed',
                width: `${width}px`,
                top: `${top}px`,
                height: `${height}px`,
                left: `${left}px`,
                opacity: 0,
              });
            }
          }}
        >
          {type === 'shrink' ? shrinkEl : <>{expandEl}</>}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}
// react-transition-group 会缓存子元素
