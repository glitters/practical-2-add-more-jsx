import Hello from './Hello';
import Hobby from './Hobby';
import TitleLi from './TitleLi';
import Age from './Age';

const hobbies = [
    { emoji="🏊" title="Swim" },
    { emoji="🏃" title="Game" },
    { emoji="🎮" title="Read" },
]

export default function App() {
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
                        <Hobby emoji="🏊" title="Swim" />
                        <Hobby emoji="🏃" title="Game" />
                        <Hobby emoji="🎮" title="Read" />
                    </ol>
                </ol>
            </div>
        </div>
    );
}
