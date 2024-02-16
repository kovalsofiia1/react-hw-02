import css from './Options.module.css'

export default function Options({ onClick, onReset, total }) {
    return (
        <div className={css.options}>
            <button className={css.btn} onClick={() => onClick('good')}>Good</button>
            <button className={css.btn} onClick={() => onClick('neutral')}>Neutral</button>
            <button className={css.btn} onClick={() => onClick('bad')}>Bad</button>
            {total > 0 && <button className={css.btn} onClick={ onReset}>Reset</button>}

        </div>
    )
}