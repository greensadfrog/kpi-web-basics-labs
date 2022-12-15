import GoodsCard from "./GoodsCard";
import './App.css'
import goodsList from './goods'

function App() {
    return (
        <div>
            <h1>Магазин фотографій</h1>
            <div className="main">
                <div className="container">
                    {goodsList.map(item => <GoodsCard item={item} key={item.id}/>)}
                </div>
            </div>
        </div>

    );
}

export default App;
