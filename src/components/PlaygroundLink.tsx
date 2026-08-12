import React, {useMemo} from 'react';

type Props = {code: string; children?: React.ReactNode};

export default function PlaygroundLink({code, children = 'Run on Playground'}: Props) {
  const href = useMemo(() => {
    const state = {version: '2.4.10', platform: 'java', args: '', noneMarkers: true, theme: 'idea', code: `${code.trim()}\n`, compilerArguments: {}};
    const utf8 = unescape(encodeURIComponent(JSON.stringify(state)));
    return `https://play.kotlinlang.org/#${btoa(utf8)}`;
  }, [code]);

  return <a className="playground-link" href={href} target="_blank" rel="noreferrer">
    <svg className="playground-link__icon" viewBox="0 0 12 14" aria-hidden="true">
      <path d="M1 1.2v11.6L11 7 1 1.2Z" fill="currentColor" />
    </svg>
    <span>{children}</span>
  </a>;
}
