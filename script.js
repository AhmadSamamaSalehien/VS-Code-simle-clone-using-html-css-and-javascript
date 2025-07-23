require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.0/min/vs' }});

require(['vs/editor/editor.main'], function()

    {

    monaco.editor.defineTheme('neonTheme',
        
        {

            base: 'vs-dark',
            inherit: true,
            rules: [
                { token: 'comment', foreground: '00ffcc', fontStyle: 'italic' },
                { token: 'keyword', foreground: 'ff00ff', fontStyle: 'bold' },
                { token: 'string', foreground: '00ffcc' },
                { token: 'number', foreground: 'ff00ff' },
                { token: 'identifier', foreground: 'ffffff' },
            ],

            colors:
            
                {

                    'editor.background': '#1a1a1a',
                    'editor.foreground': '#ffffff',
                    'editor.lineHighlightBackground': '#2a2a2a',
                    'editorLineNumber.foreground': '#00ffcc',
                    'editor.selectionBackground': '#00ffcc33',
                    'editorCursor.foreground': '#00ffcc'
            
                }
    
        })

    const editor = monaco.editor.create(document.getElementById('editor'),
    
        {

            value: `// Welcome to Neon Code Editor\nconsole.log('Hello, World!');`,
            language: 'javascript',
            theme: 'neonTheme',
            automaticLayout: true,
            fontSize: 16,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,

        })

    window.loadFile = function(filename)
    
        {
            const sampleContent = {

                'index.html': `<html>\n<head>\n    <title>Sample</title>\n</head>\n<body>\n    <h1>Hello</h1>\n</body>\n</html>`,
                'style.css': `body {\n    background: #1a1a1a;\n    color: #00ffcc;\n}`,
                'script.js': `console.log('Hello, World!');`

            };

            const content = sampleContent[filename] || '// Select a file';
            const language = filename.endsWith('.html') ? 'html' : filename.endsWith('.css') ? 'css' : 'javascript';

            editor.setValue(content);
            monaco.editor.setModelLanguage(editor.getModel(), language);
            
        };
        
});