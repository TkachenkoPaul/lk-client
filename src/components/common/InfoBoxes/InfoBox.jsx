import styles from './InfoBoxes.module.scss'
const InfoBox = props => {
  return (
    <div className="col-md-6 col-sm-6 col-lg-3 col-12">
      <div className={`info-box elevation-3 ${styles.scale}`}>
        <span
          className={`info-box-icon ${props.iconBg}  elevation-2 hidden-sm-up hidden-md-up`}>
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
