import './MixArchiveStyles.css'

export default function MixArchive(props){

    const mixes = props.data.allMixes.map((mix) =>
        <div key={Math.random()}>
            <button key={Math.random()} className='mixArchives' onClick={
                () => {
                    props.data.setCurrentSelectedMix(mix);
                    props.data.setMixArchiveOpen(!props.data.mixArchiveOpen)
                }
                }>{mix.title}
            </button>
        </div>
   );

    function OnClick(){
        props.data.setMixArchiveOpen(!props.data.mixArchiveOpen);
        props.data.setAboutOpen(false);
    }

    return(
        <div className="mixArchiveContainer">
            <button className="mixArchiveButton" onClick={OnClick}>MIX ARCHIVE ↓</button>
            {props.data.mixArchiveOpen ? mixes : null}
        </div>
    )
}