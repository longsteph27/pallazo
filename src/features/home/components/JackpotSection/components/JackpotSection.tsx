function JackpotSection() {
  return (
    <section className="jackpot-section bg-[#F5F1EB] py-20">
      <div className="container mx-auto px-4">
        <div className="jackpot-content">
          {/* Title */}
          <div className="jackpot-title-wrapper">
            <h2 className="jackpot-title">HIGHLIGHT JACKPOT</h2>
          </div>

          {/* Jackpot Displays */}
          <div className="jackpot-displays">
            <div className="jackpot-item">
              <div className="jackpot-label">TOTAL PRIZE ALLOCATED</div>
              <div className="jackpot-amount">5-46990:23</div>
              <div className="jackpot-footer">LAST UPDATED</div>
            </div>

            <div className="jackpot-divider">
              <div className="divider-circle"></div>
            </div>

            <div className="jackpot-item">
              <div className="jackpot-label">TOTAL PRIZE ALLOCATED</div>
              <div className="jackpot-amount">5-46.990123</div>
              <div className="jackpot-footer">LAST UPDATED</div>
            </div>
          </div>

          {/* View Button */}
          <div className="jackpot-button-wrapper">
            <button className="view-button">VIEW BUTTON</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JackpotSection

