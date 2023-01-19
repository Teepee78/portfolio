import './Title.css';
import snippet7 from '../../assets/svg/code-snippet 7.svg';
import snippet6 from '../../assets/svg/code-snippet 6.svg';
import snippet9 from '../../assets/svg/code-snippet 9.svg';
import snippet10 from '../../assets/svg/code-snippet 10.svg';
import snippet8 from '../../assets/svg/code-snippet 8.svg';

function Title () {
	return (
		<div className="title">
      <div className="main">
        <p className="hello">Hello, I am</p>
        <p className="name">Toluwalase Phillips</p>
        <p className="backend">Software developer</p>
        <div className="empty"></div>
        <p className="checkout">// Check out my Github page</p>
        <a href="https://github.com/Teepee78" target="_blank" className="github" rel="noreferrer">"https://github.com/Teepee78"</a>
      </div>

      <div className='snippets'>
        <img className='snippet snippet7' alt='code snippet' src={snippet7}/>
        <img className='snippet snippet6' alt='code snippet' src={snippet6}/>
        <img className='snippet snippet9' alt='code snippet' src={snippet9}/>
        <img className='snippet snippet10' alt='code snippet' src={snippet10}/>
        <img className='snippet snippet8' alt='code snippet' src={snippet8}/>
      </div>
    </div>
	);
}


export default Title;
