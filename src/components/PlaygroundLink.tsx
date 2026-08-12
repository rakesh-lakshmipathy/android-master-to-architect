import React, {useMemo} from 'react';

type Props = {code: string; children?: React.ReactNode};

export default function PlaygroundLink({code}: Props) {
  const href = useMemo(() => {
    const state = {version: '2.4.10', platform: 'java', args: '', noneMarkers: true, theme: 'idea', code: `${code.trim()}\n`, compilerArguments: {}};
    const utf8 = unescape(encodeURIComponent(JSON.stringify(state)));
    return `https://play.kotlinlang.org/#${btoa(utf8)}`;
  }, [code]);

  return <a className="playground-link" href={href} target="_blank" rel="noreferrer">
    <span>Open in Kotlin Playground</span>
    <span className="playground-link__external" aria-hidden="true">↗</span>
  </a>;
}
