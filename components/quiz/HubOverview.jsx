export default function HubOverview({ summary, covers, howToStudy, levelTips }) {
  return (
    <div className="hub-overview">
      {summary && <p className="hub-overview__summary">{summary}</p>}

      {covers?.length > 0 && (
        <div className="hub-overview__block">
          <h2 className="hub-overview__heading">What you will practice</h2>
          <ul className="hub-overview__list">
            {covers.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {howToStudy && (
        <div className="hub-overview__block">
          <h2 className="hub-overview__heading">How to study this track</h2>
          <p className="hub-overview__text">{howToStudy}</p>
        </div>
      )}

      {levelTips?.length > 0 && (
        <div className="hub-overview__block">
          <h2 className="hub-overview__heading">Level tips</h2>
          <ul className="hub-overview__list">
            {levelTips.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
