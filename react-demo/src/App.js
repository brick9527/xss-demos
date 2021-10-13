
function App() {
  const userProvidePropsString = `{"dangerouslySetInnerHTML":{"__html":"<img onerror='alert(\\"xss\\")' src='/test.png'>"}}`
  const userProvideProps = JSON.parse(userProvidePropsString);

  const testHref = 'javascript:alert("a:xss")';

  const testImgSrc = 'javascript:alert("img:xss")';
  return (
    <div className="App">
      <div {...userProvideProps} /> 

      <a href={testHref}>测试xss</a>

      <img src={testImgSrc} />
    </div>
  );
}

export default App;
