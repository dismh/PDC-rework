import React, { useState } from "react";
import styled from "styled-components";
import scanner from "../../assets/scanner.jpg";

const Payment = ({ theme = "light" }) => {
  const isDark = theme === "dark";
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePayClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <SectionWrapper id="payment" $isDark={isDark}>
        <h2>Secure Your Spot</h2>
        <p>Click below to proceed with the payment.</p>
        <StyledWrapper $isDark={isDark}>
          <button className="pay-btn" onClick={handlePayClick}>
            <span className="btn-text">Pay Now</span>
            <div className="icon-container">
              <svg viewBox="0 0 24 24" className="icon card-icon">
                <path
                  d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18C2,19.11 2.89,20 4,20H20C21.11,20 22,19.11 22,18V6C22,4.89 21.11,4 20,4Z"
                  fill="currentColor"
                />
              </svg>
              <svg viewBox="0 0 24 24" className="icon payment-icon">
                <path
                  d="M2,17H22V21H2V17M6.25,7H9V6H6V3H18V6H15V7H17.75L19,17H5L6.25,7M9,10H15V8H9V10M9,13H15V11H9V13Z"
                  fill="currentColor"
                />
              </svg>
              <svg viewBox="0 0 24 24" className="icon dollar-icon">
                <path
                  d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"
                  fill="currentColor"
                />
              </svg>
              <svg
                viewBox="0 0 24 24"
                className="icon wallet-icon default-icon"
              >
                <path
                  d="M21,18V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V6H12C10.89,6 10,6.9 10,8V16A2,2 0 0,0 12,18M12,16H22V8H12M16,13.5A1.5,1.5 0 0,1 14.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,12A1.5,1.5 0 0,1 16,13.5Z"
                  fill="currentColor"
                />
              </svg>
              <svg viewBox="0 0 24 24" className="icon check-icon">
                <path
                  d="M9,16.17L4.83,12L3.41,13.41L9,19L21,7L19.59,5.59L9,16.17Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </button>
        </StyledWrapper>
      </SectionWrapper>

      {isModalOpen && (
        <ModalBackdrop $isDark={isDark} onClick={handleCloseModal}>
          <ModalContent $isDark={isDark} onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <h3>Scan to Pay</h3>
              <CloseButton onClick={handleCloseModal}>×</CloseButton>
            </ModalHeader>
            <ModalBody>
              <p>Scan the QR code below to complete your payment.</p>
              <QRImage src={scanner} alt="QR Code for Payment" />
            </ModalBody>
          </ModalContent>
        </ModalBackdrop>
      )}
    </>
  );
};

const SectionWrapper = styled.section`
  padding: 100px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ $isDark }) => ($isDark ? "#121212" : "#f8f4ed")};
  color: ${({ $isDark }) => ($isDark ? "#f5f5dc" : "#1a1a1a")};

  h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`;

const StyledWrapper = styled.div`
  .pay-btn {
    position: relative;
    padding: 12px 24px;
    font-size: 16px;
    background: ${({ $isDark }) => ($isDark ? "#222" : "#333")};
    color: ${({ $isDark }) => ($isDark ? "#f5f5dc" : "#f8f4ed")};
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
  }

  .pay-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
  }

  .icon-container {
    position: relative;
    width: 24px;
    height: 24px;
  }

  .icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    color: #22c55e;
    opacity: 0;
    visibility: hidden;
  }

  .default-icon {
    opacity: 1;
    visibility: visible;
  }

  .pay-btn:hover .wallet-icon {
    opacity: 0;
    visibility: hidden;
  }

  .pay-btn:hover .card-icon {
    animation: iconRotate 2.5s infinite;
    animation-delay: 0s;
  }

  .pay-btn:hover .payment-icon {
    animation: iconRotate 2.5s infinite;
    animation-delay: 0.5s;
  }

  .pay-btn:hover .dollar-icon {
    animation: iconRotate 2.5s infinite;
    animation-delay: 1s;
  }

  .pay-btn:hover .check-icon {
    animation: iconRotate 2.5s infinite;
    animation-delay: 1.5s;
  }

  .pay-btn:active .icon {
    animation: none;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .pay-btn:active .check-icon {
    animation: checkmarkAppear 0.6s ease forwards;
    visibility: visible;
  }

  .btn-text {
    font-weight: 600;
    font-family: system-ui, -apple-system, sans-serif;
  }

  @keyframes iconRotate {
    0% {
      opacity: 0;
      visibility: hidden;
      transform: translateY(10px) scale(0.5);
    }
    5% {
      opacity: 1;
      visibility: visible;
      transform: translateY(0) scale(1);
    }
    15% {
      opacity: 1;
      visibility: visible;
      transform: translateY(0) scale(1);
    }
    20% {
      opacity: 0;
      visibility: hidden;
      transform: translateY(-10px) scale(0.5);
    }
    100% {
      opacity: 0;
      visibility: hidden;
      transform: translateY(-10px) scale(0.5);
    }
  }

  @keyframes checkmarkAppear {
    0% {
      opacity: 0;
      transform: scale(0.5) rotate(-45deg);
    }
    50% {
      opacity: 0.5;
      transform: scale(1.2) rotate(0deg);
    }
    100% {
      opacity: 1;
      transform: scale(1) rotate(0deg);
    }
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: ${({ $isDark }) => ($isDark ? "#222" : "#fff")};
  color: ${({ $isDark }) => ($isDark ? "#f5f5dc" : "#1a1a1a")};
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  animation: modalEntry 0.5s ease forwards;

  @keyframes modalEntry {
    0% {
      opacity: 0;
      transform: scale(0.7);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => (theme === "dark" ? "#f5f5dc" : "#1a1a1a")};
`;

const ModalBody = styled.div`
  text-align: center;

  p {
    margin-bottom: 20px;
    font-size: 1rem;
  }
`;

const QRImage = styled.img`
  width: 200px;
  height: 200px;
  margin: 0 auto;
  display: block;
  object-fit: contain;
`;

export default Payment;
