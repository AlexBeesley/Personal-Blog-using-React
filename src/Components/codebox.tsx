import { useEffect, useRef, useState, type CSSProperties } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/light'
import csharp from 'react-syntax-highlighter/dist/esm/languages/hljs/csharp'
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css'
import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
import json from 'react-syntax-highlighter/dist/esm/languages/hljs/json'
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python'
import xml from 'react-syntax-highlighter/dist/esm/languages/hljs/xml'
import yaml from 'react-syntax-highlighter/dist/esm/languages/hljs/yaml'
import Styles from '../Styles/codebox.module.css'
import Icon from './Icons'

/* The light build with only the languages the posts use, rather than all
   of highlight.js. */
SyntaxHighlighter.registerLanguage('csharp', csharp)
SyntaxHighlighter.registerLanguage('css', css)
SyntaxHighlighter.registerLanguage('html', xml)
SyntaxHighlighter.registerLanguage('javascript', javascript)
SyntaxHighlighter.registerLanguage('json', json)
SyntaxHighlighter.registerLanguage('python', python)
// Razor is markup with C# inside; the markup grammar keeps its tags legible.
SyntaxHighlighter.registerLanguage('razor', xml)
SyntaxHighlighter.registerLanguage('yaml', yaml)

const LABELS: Record<string, string> = {
  csharp: 'C#',
  css: 'CSS',
  html: 'HTML',
  javascript: 'JavaScript',
  json: 'JSON',
  python: 'Python',
  razor: 'Razor',
  yaml: 'YAML',
}

/* A theme drawn from the design system's tokens — the accent, its cool and
   warm turns, and the status colours — so code reads as part of the glass. */
const t = (color: string, extra: CSSProperties = {}): CSSProperties => ({
  color,
  ...extra,
})
const glassTheme: Record<string, CSSProperties> = {
  hljs: { display: 'block', color: 'var(--ink)', background: 'none' },
  'hljs-comment': t('var(--ink-3)', { fontStyle: 'italic' }),
  'hljs-quote': t('var(--ink-3)', { fontStyle: 'italic' }),
  'hljs-keyword': t('var(--accent-hover)'),
  'hljs-selector-tag': t('var(--accent-hover)'),
  'hljs-literal': t('var(--accent-hover)'),
  'hljs-meta-keyword': t('var(--accent-hover)'),
  'hljs-string': t('var(--success)'),
  'hljs-regexp': t('var(--success)'),
  'hljs-addition': t('var(--success)'),
  'hljs-number': t('var(--warning)'),
  'hljs-symbol': t('var(--warning)'),
  'hljs-bullet': t('var(--warning)'),
  'hljs-link': t('var(--warning)'),
  'hljs-title': t('var(--info)'),
  'hljs-section': t('var(--info)'),
  'hljs-name': t('var(--info)'),
  'hljs-selector-id': t('var(--info)'),
  'hljs-selector-class': t('var(--info)'),
  'hljs-type': t('var(--accent-cool)'),
  'hljs-built_in': t('var(--accent-cool)'),
  'hljs-class': t('var(--accent-cool)'),
  'hljs-attr': t('var(--accent-warm)'),
  'hljs-attribute': t('var(--accent-warm)'),
  'hljs-variable': t('var(--accent-warm)'),
  'hljs-template-variable': t('var(--accent-warm)'),
  'hljs-params': t('var(--ink-2)'),
  'hljs-meta': t('var(--ink-2)'),
  'hljs-doctag': t('var(--ink-2)'),
  'hljs-tag': t('var(--ink-3)'),
  'hljs-deletion': t('var(--danger)'),
  'hljs-emphasis': { fontStyle: 'italic' },
  'hljs-strong': { fontWeight: 700 },
}

type CodeBoxProps = {
  children: string
  language: string
}

const CodeBox = ({ children, language }: CodeBoxProps) => {
  const code = children.replace(/^\n+|\s+$/g, '')
  const [copied, setCopied] = useState(false)
  const timerRef = useRef(0)

  useEffect(() => () => window.clearTimeout(timerRef.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      window.clearTimeout(timerRef.current)
      timerRef.current = window.setTimeout(() => setCopied(false), 1800)
    } catch {
      // Clipboard refused (insecure context or permissions): nothing to do.
    }
  }

  return (
    <figure className={Styles.codebox} aria-label={`Code example in ${language}`}>
      <figcaption className={Styles.bar}>
        <span className={Styles.lang}>{LABELS[language] ?? language}</span>
        <button
          type="button"
          className={Styles.copy}
          onClick={copy}
          aria-label="Copy code"
        >
          <Icon name={copied ? 'check' : 'copy'} size={15} />
          <span aria-hidden="true">{copied ? 'Copied' : 'Copy'}</span>
        </button>
        <span className="sr-only" role="status">
          {copied ? 'Code copied to clipboard' : ''}
        </span>
      </figcaption>
      <SyntaxHighlighter
        language={language}
        style={glassTheme}
        className={Styles.highlighter}
        customStyle={{ background: 'none', margin: 0 }}
        codeTagProps={{ className: Styles.code }}
      >
        {code}
      </SyntaxHighlighter>
    </figure>
  )
}

export default CodeBox
