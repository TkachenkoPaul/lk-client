const InfoBox = props => {
  let sizeStyle = ``
  props.sm ? (sizeStyle += `col-sm-${props.sm} `) : (sizeStyle += '')
  props.md ? (sizeStyle += `col-md-${props.md} `) : (sizeStyle += '')
  props.xs ? (sizeStyle += `col-xs-${props.xs} `) : (sizeStyle += '')
  console.log(sizeStyle)
  console.log('TEST')
  return (
    <div className={sizeStyle}>
      <div className="info-box elevation-3">
        <span
          className={`info-box-icon ${props.iconBg} elevation-2 hidden-sm-up hidden-md-up`}>
          <i className={props.iconStyle} />
        </span>
        <div className="info-box-content">
          {props.link ? (
            <a href={props.link} target="_blank" rel="noreferrer">
              <span className="info-box-text">{props.name}</span>
              <span className="info-box-number">
                {props.value}
                <small> {props.measurement ? props.measurement : ''}</small>
              </span>
            </a>
          ) : (
            <>
              <span className="info-box-text">
                {props.link ? '' : props.name}
              </span>
              <span className="info-box-number">
                {props.link ? (
                  <a
                    href={props.link}
                    className="btn btn-block btn-primary"
                    target="_blank"
                    rel="noreferrer">
                    {props.name}
                  </a>
                ) : (
                  props.value
                )}
                <small> {props.measurement ? props.measurement : ''}</small>
              </span>{' '}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
export default InfoBox
