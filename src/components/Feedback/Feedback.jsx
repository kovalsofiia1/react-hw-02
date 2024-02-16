import css from './Feedback.module.css'

export default function Feedback({ value, total, positive }) {
    return (
        <div className={ css.feedback}>
            <p>Good: {value.good}</p>
            <p>Neutral: { value.neutral }</p>
            <p>Bad: {value.bad}</p>
            <p>Total: {total}</p>
            <p>Positive: { positive }%</p>
        </div>
    )
}