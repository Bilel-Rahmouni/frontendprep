export default function CodeDemo({ demo }) {
  if (!demo) return null

  function safeScopeId(id) {
    return `demo-${String(id ?? 'css').replace(/[^a-zA-Z0-9-_]/g, '')}`
  }

  if (demo.type === 'html') {
    return (
      <div className="code-demo">
        <div className="code-demo__panel">
          <span className="code-demo__label">Code</span>
          <pre className="code-demo__code">{demo.code}</pre>
        </div>
        <div className="code-demo__panel code-demo__panel--preview">
          <span className="code-demo__label">Preview</span>
          <div
            className="code-demo__preview code-demo__preview--html"
            dangerouslySetInnerHTML={{ __html: demo.code }}
          />
        </div>
      </div>
    )
  }

  if (demo.type === 'css') {
    const scopeId = safeScopeId(demo.id)
    return (
      <div className="code-demo">
        <div className="code-demo__panel">
          <span className="code-demo__label">CSS</span>
          <pre className="code-demo__code">{demo.code}</pre>
        </div>
        <div className="code-demo__panel code-demo__panel--preview">
          <span className="code-demo__label">Preview</span>
          <div className="code-demo__preview">
            <style>{`#${scopeId} { ${demo.code} }`}</style>
            <div id={scopeId} className="code-demo__css-target">
              {demo.preview ?? 'Preview box'}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (demo.type === 'jsx') {
    return (
      <div className="code-demo code-demo--single">
        <div className="code-demo__panel">
          <span className="code-demo__label">JSX</span>
          <pre className="code-demo__code">{demo.code}</pre>
        </div>
      </div>
    )
  }

  if (demo.type === 'output') {
    return (
      <div className="code-demo">
        {demo.code && (
          <div className="code-demo__panel">
            <span className="code-demo__label">Code</span>
            <pre className="code-demo__code">{demo.code}</pre>
          </div>
        )}
        <div className="code-demo__panel code-demo__panel--preview">
          <span className="code-demo__label">Output</span>
          <pre className="code-demo__output">{demo.output}</pre>
        </div>
      </div>
    )
  }

  return null
}
