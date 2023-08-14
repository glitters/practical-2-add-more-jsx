import Hello from './Hello';
import Hobby from './Hobby';
import TitleLi from './TitleLi';
import Age from './Age';

const hobbies = [
    { emoji:"🏊", title:"Swim" },
    { emoji:"🏃", title:"Game" },
    { emoji:"🎮", title:"Read" },
    { title:"Jog" },
    { title:"Jump" },
]

export default function App(props) {
    const name = 'Ron Lim'
    return (
        <div>
            <Hello>name={name}</Hello>
            <div>
                <ol>
                    <TitleLi title="Name">{name}</TitleLi>
                    <Age value={18}/>
                    <TitleLi title="Hobbies" />
                    <ol>
                        {/* {hobbies.filter((item)=>item.emoji).map(function(hobby, index){
                                return <Hobby title={hobby.title} emoji={hobby.emoji} key={index}/>
                        })} */}

                           {hobbies.map(function(hobby, index){
                            if(!hobby.emoji){
                                return null
                            }
                                return <Hobby title={hobby.title} emoji={hobby.emoji} key={index}/>
                        })} 
                    </ol>
                </ol>
            </div>
        </div>
    );
}
