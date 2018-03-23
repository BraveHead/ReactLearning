import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';
import logo from './logo.svg';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

//动态改变数据，也只会改变索要改变数据的DOM，但是只会改变所需要改变数据的DOM不会改变ROOTDOM
/*
function tick() {
    function formateName(user) {
        if(user){
            return user.firstName + '' + user.lastName;
        }
        return 'No User!';
    }

    const user = {
        firstName: 'zhang',
        lastName: 'Shun'
    }
    const element = (
        <div>
            Hello, {formateName(user)},
            <img src={logo} tabIndex='0' />,
            <h2>现在时间是： {new Date().getSeconds()}.</h2>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);
*/

//组件传递
/*function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
const elementOne = <Welcome name='Saye'/>;
ReactDOM.render(
    elementOne,
    document.getElementById('root')
)*/

//通过组件多次渲染另一个组件
/*function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return (
        <div>
            <Welcome name='Saye, one!' />
            <Welcome name='Saye, two!'/>
            <Welcome name='Saye Three' />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)*/

//提取组件
function AvatarUrl(props) {
    return (
        <img className="Avatar"
             src={props.userMeg.avatarUrl}
             alt={props.userMeg.name}
        />
    );
}

//UserInfo
/*function UserInfo(props) {
    return (
        <div className="UserInfo">
            <AvatarUrl userMeg={props.user}/>
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}
const comment = {
    author: {
        avatarUrl:'http://placekitten.com/g/64/64',
        name: 'SanYe'
    },
    text: 'My name is:',
    date: new Date()
};

function formatDate(date) {
    return date.toLocaleDateString();
};

function Comment(props) {
    return (
        <div className="Comnent">
            <UserInfo user={props.author}/>
            <div className="Comnent-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

ReactDOM.render(
    <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}/>,
    document.getElementById('root')
);*/

//class 类实现state

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timeID = setInterval(
            () => this.tick(),
            1000
        );
    }

    compontentWillUnmount() {
        clearInterval(this.timeID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello,world!</h1>
                <h2>It is: {this.state.date.toLocaleTimeString()}.</h2>
            </div>)
    };
}

// ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
// )

//组件都是隔离的比如下面
/*
class App extends React.Component{
    render(){
        return (
            <div>
                <Clock/>
                <Clock/>
                <Clock/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
*/

//React中的事件处理函数
/*
class Toggle extends React.Component{
    constructor (props){
        super(props);
        this.state = {isOpen: true};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState( prvState => ({
            isOpen:!prvState.isOpen
        })) ;
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                It is: {this.state.isOpen ? 'ON' : 'OFF'}
            </button>
        );
    }
}

ReactDOM.render(
    <Toggle/>,
    document.getElementById('root')
)
*/

//向事件处理程序传递参数
/*class PropsDate extends React.Component{
    constructor (props){
        super(props);
        this.state = {name:'sb'};
        this.prevantPop = this.prevantPop.bind(this, this.state.name);
    }
    prevantPop(name, e){
        e.preventDefault();
        alert(name);
    }

    render() {
        return (
            <div>
                <h1>Hello,</h1>
                <a href='https://www.baidu.com' onClick={this.prevantPop}>点我</a>
            </div>
        );
    }
}

ReactDOM.render(
    <PropsDate/>,
    document.getElementById('root')
)*/

//条件渲染   TODO   子组件没办法响应父组件的状态的动态传递
// function UserGreeting(props) {
//     return <div>Welcome Back!</div>
// }
// function GuestGreeting(props) {
//     return <div>Please Login Up!</div>
// }
// class Greeting extends React.Component{
//     constructor (props){
//         super(props)
//         this.state = {isLogin: this.props.isLoggedIn};
//     }
//     componentDidMount() {
//         console.log(this.state.isLogin+'???');
//     }
//     render() {
//         const isLogin = this.state.isLogin;
//         if(isLogin){
//             return (
//                 <UserGreeting />
//             );
//         }else{
//             return (
//                 <GuestGreeting />
//             );
//         }
//     }
// }

// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>;
// }
//
// function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>;
// }
//
// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//         return <UserGreeting />;
//     }
//     return <GuestGreeting />;
// }
//
//
// //元素变量
// function LoginButton(props) {
//     return <div onClick={props.onClick}>Login</div>
// }
// function LogoutButton(props) {
//     return <div onClick={props.onClick}>Logout</div>
// }
//
// class LoginControl extends React.Component{
//     constructor (props){
//         super(props);
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
//         this.state = {isLoggedIn: true};
//     }
//     handleLoginClick(){
//         this.setState({isLoggedIn: true,});
//         // console.log(this.state.isLoggedIn);
//     }
//     handleLogoutClick(){
//         this.setState({isLoggedIn: false})
//         // console.log(this.state.isLoggedIn);
//     }
//     render(){
//         const IsLoggedIn = this.state.isLoggedIn;
//         console.log(IsLoggedIn+ '...');
//         let button = null;
//         let greet = null;
//         if(IsLoggedIn){
//             button = <LogoutButton onClick={this.handleLogoutClick}/>
//             greet = <Greeting isLoggedIn={true}/>
//         }else{
//             button = <LoginButton onClick={this.handleLoginClick}/>
//             greet = <Greeting isLoggedIn={false}/>
//         }
//         return (
//             <div>
//                 {greet}
//                 {button}
//             </div>
//         )
//     }
// }
//
// ReactDOM.render(
//     <LoginControl />,
//     document.getElementById('root')
// );
//

//逻辑与
function MailBox(props) {
    const unreadMessage = props.unreadMessage;
    return (
        <div>
            <h1>Hello</h1>
            {unreadMessage.length > 0 &&
            <h2>
                You have {unreadMessage.length} unread message!
            </h2>
            }
        </div>
    );
}

const message = ['react', '123', 'Demo'];
/*
ReactDOM.render(
    <MailBox unreadMessage={message}/>,
    document.getElementById('root')
)*/

//阻止组件的渲染
function WarningBanner(props) {
    if (!props.warning) {
        return null;
    }
    return (
        <div className="warning">
            Warning!!!
        </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {warning: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prvState => ({
            warning: !prvState.warning
        }))
    }

    render() {
        return (
            <div>
                <WarningBanner warning={this.state.warning}/>
                <button onClick={this.handleClick}>
                    {this.state.warning ? '显示waring' : '隐藏warning'}
                </button>
            </div>
        );
    }
};

ReactDOM.render(
    <Page/>,
    document.getElementById('root')
)

//列表和keys 
function NumberList(props) {
    const number = props.numbers;
    const listItems = number.map((number, index) =>
        <li key={index}>
            {number.text}
        </li>
    )
    console.log(listItems);
    return (
        <ul>{listItems}</ul>
    );
}

const number = [{text: '1'}, {text: '2'}, {text: '3'}];
ReactDOM.render(
    <NumberList numbers={number}/>,
    document.getElementById('root')
)

//keys的正确使用方式
function ListItem(props) {
    const number = props.value;
    return (
        <li>
            {number}
        </li>
    );
}

function ListUl(props) {
    const list = props.list;
    const listNumber = list.map((number) =>
        <ListItem value={number} key={number.toString()}/>
    )

    return (
        <ul>
            {listNumber}
        </ul>
    )
}

const list = [1, 2, 3, 4, 5];
ReactDOM.render(
    <ListUl list={list}/>,
    document.getElementById('root2')
)

//元素的key在兄弟元素间应该是唯一的
function Blog(props) {
    const slider = (
        <ul>
            {props.posts.map((post) => (
                <li key={post.id}>
                    {post.title}
                </li>
            ))}
        </ul>
    )
    const content = props.posts.map(
        (post) =>
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </div>
    )
    return (
        <div>
            {slider}
            <hr/>
            {content}
        </div>
    );
}

const posts = [
    {id: 1, title: 'Hello', content: 'Welcome to React World!'},
    {id: 2, title: 'Second', content: 'Next time you will leaning match more!'}
]
ReactDOM.render(
    <Blog posts={posts}/>,
    document.getElementById('root2')
)

//表单
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {placeholder: "Please entry some words!", value: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEntery = this.handleEntery.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value.toUpperCase()})
    }

    handleSubmit(event) {
        alert('A name was submitted:' + this.state.value);
        event.preventDefault();
    }

    handleEntery(event) {
        // this.state.value = event.tart
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <textarea type='text' placeholder={this.state.placeholder} value={this.state.value}
                              onChange={this.handleChange} onFocus={this.handleChange}>

                    </textarea>
                </label>
                <input type='submit' value="submit"/>
            </form>
        );
    }
}

ReactDOM.render(
    <Form/>,
    document.getElementById('form')
)

//select下拉框
class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'demo2'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('You selector value was :' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value='demo1'>demo1</option>
                    <option value='demo2'>demo2</option>
                    <option value='demo3'>demo3</option>
                    <option value='demo4'>demo4</option>
                </select>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}

ReactDOM.render(
    <FlavorForm/>,
    document.getElementById('selector')
)

//状态提升
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>水会烧开！</p>;
    } else {
        return <p>水不会烧开！</p>
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({temperature: event.target.value});
    }

    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>输入一个摄氏温度</legend>
                <input value={temperature} onChange={this.handleChange}/>
                <BoilingVerdict celsius={parseFloat(temperature)}/>
            </fieldset>
        )
    }
}

ReactDOM.render(
    <Calculator/>,
    document.getElementById('valueUp')
)

//组合VS继承
function FancyBorder(props) {
    return (
        <div className={"FancyBorder FancyBorder-" + props.color}>
            {props.children}
        </div>
    )
}

function WelcomeDialog() {
    return (
        <FancyBorder>
            <h1 className="Dialog-title">
                Welcome Dialog!
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    )
}

// ReactDOM.render(
//     <WelcomeDialog/>,
//     document.getElementById('composition')
// )

//自定义多个入口的包含关系
function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

function Left() {
    return <p>Left</p>
}
function Right() {
    return <p>Right</p>
}

function SplitApp() {
    return (
        <SplitPane
            left={
                <Left/>
            }
            right={
                <Right/>
            }
        />
    );
}

ReactDOM.render(
    <SplitApp/>,
    document.getElementById('composition')
)

//深入理解JSX
/*

const myComponents = {
    DatePicker: function (props) {
        return <div>Now color is {props.color}</div>
    }
}
function BlueDatePicker() {
    return <myComponents.DatePicker color='red'/>
}
ReactDOM.render(
    <BlueDatePicker/>,
    document.getElementById('entry-jsx')
)
*/

//拓展属性

/*
function Greeting(props) {
    return <div>{'My name is:' + props.firstName + ',' + props.lastName}</div>
}

function  App2() {
    const props = {firstName:'Zhang', lastName:'Shun'};
    return <Greeting {...props}/>
}

ReactDOM.render(
    <App2/>,
    document.getElementById('entry-jsx')
)
*/

//PropTypes 检测静态类型

function Person(props) {
    return <div>props.username</div>
}

class Greeting extends React.Component{
    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>

            </div>
        );
    }
}
Greeting.propTypes = {
    name:PropTypes.string
}

//只传递一个子代
class MyComponent extends  React.Component{
    render() {
        const children = this.props.children;
        return (
            <div>{children}</div>
        )
    }
}
MyComponent.propTypes = {
    children: PropTypes.element.isRequired
}

//属性默认值
class Deauflet extends React.Component{
    static defaultProps = {
        name:'SB'
    }
    render() {
        return (
            <div>
                Hello, {this.props.name}
            </div>
        )
    }
}
// Deauflet.defaultProps = {
//     name: 'ZhangShun'
// }
ReactDOM.render(
    <Deauflet/>,
    document.getElementById('entry-jsx')
)
//给DOM添加Ref
// class CustomTextInput extends React.Component {
//     constructor(props) {
//         super(props);
//         this.focus = this.focus.bind(this);
//     }
//     focus() {
//         this.textInput.focus();
//     }
//     render(){
//         return (
//             <div>
//                 <input ref={input => this.textInput = input}/>
//                 <button type='submit' value='Focus Input' onClick={this.focus}>
//                     Focus!
//                 </button>
//             </div>
//         );
//     }
// }
//给类组件添加ref
// class AutoFocusTextInput extends React.Component{
//     componentDidMount(){
//         this.textInput.focus();
//     }
//     render(){
//         return <CustomTextInput ref={element => this.textInput = element}/>
//     }
// }

//refs与函数式组件
    //不能直接在函数式组件上使用ref,因为函数式组件没有实例，但是可以在函数式组件的内部去使用它，只要它指向一个dom或者一个class组件
function CustomTextInput() {
    let textInput = null;
    function focus() {
        textInput.focus();
    }
    return (
        <div>
            <input type='text' ref={input => textInput = input}/>
            <button type='submit' onClick={focus}>Focus!</button>
        </div>
    );
}

//对父组件暴露DOM节点
function CustomInput(props) {
    return (
        <div>
            <input ref={ props.inputRef }/>
        </div>
    );
}
function Parent(props) {
    return (
        <div>
            my input: <CustomInput inputRef={props.inputRef}/>
        </div>
    )
}

class GrandParent extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.inputElement.focus();
    }
    render(){
        return <Parent inputRef={el => this.inputElement = el}/>
    }
}
// ReactDOM.render(
//     <GrandParent/>,
//     document.getElementById('ref')
// )
//非受控组件
class NameForm extends React.Component{
    constructor (props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(){
        alert('Now input value is:' + this.textInput.value);
    }
    render(){
        return (
            <div>
                <input defaultValue={23} type='text' ref={input => this.textInput = input}/>
                <input type='submit' value='submit' onClick={this.handleSubmit}/>
            </div>
        );
    }
}
//浅比较
class ListOfWorlds extends React.PureComponent{
    constructor (props){
        super(props);
        this.state = {
            words: ['mark']
        };
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleAdd(){
        //赋值的时候 尽量在外部写新的变量，，要是直接或者数据再处理直接赋值再state对象上会报错
        // const words = this.state.words;
        // words.push('mar2');
        // this.setState({
        //     words: words
        // })
        // function newState(state, mark) {
        //     return Object.assign({}, state, {words: state.words.concat([mark])})
        // }
        
        this.setState(prevState => ({
            words: [...prevState.words, 'mark']
        }))
    }
    render(){
        let str = (this.state.words).join();
        return (
            <div>
                <div>{str}</div>
                <input type='submit' onClick={this.handleAdd}/>
            </div>
        );
    }
}
ReactDOM.render(
    <ListOfWorlds/>,
    document.getElementById('ref')
)
registerServiceWorker();
