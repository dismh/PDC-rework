import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import styled from "styled-components";
import scanner from "../../assets/scanner.jpg";
import Header from "../ui/header-payment"
const Payment = () => {
  


  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePayClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
    id="home"
    >
      <Header/>
      <div className="container mx-auto px-6 max-w-3xl mt-5">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-300 dark:via-purple-300 dark:to-pink-300 relative h-[1.17em]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={sectionVariants}
        >
          Registration
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></span>
        </motion.h2>

        {/* Registration Instructions */}
        <motion.div
          className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 md:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={sectionVariants}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
            How to Register
          </h3>
          <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300 list-decimal list-inside">
            <li>
              <strong className="text-gray-800 dark:text-gray-100">Pay INR 2,000 per Participant (INR 6,000 per Team):</strong>
              <p className="mt-2">
                Make the payment for your entire team (3 participants) together via NEFT/Bank Transfer or QR code.{" "}
                <strong className="text-pink-700 dark:text-pink-300">
                  It is mandatory to take a screenshot of the payment, as it must be uploaded in the registration form.
                </strong>
              </p>
              <StyledWrapper className="mt-4">
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
                    <svg viewBox="0 0 24 24" className="icon wallet-icon default-icon">
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
            </li>
            <li>
              <strong className="text-gray-800 dark:text-gray-100">Fill Registration Form:</strong>
              <p className="mt-2">
                Complete the{" "}
                <a
                  href="https://forms.gle/H21B8kx8E7s4ZvKy8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-700 dark:text-pink-300 hover:underline"
                >
                  Google Form
                </a>{" "}
                with your team details (one form per team). Upload the payment screenshot here, including the school name.
              </p>
              <a
                href="https://forms.gle/H21B8kx8E7s4ZvKy8"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 rounded-full hover:from-blue-700 hover:via-sky-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(56,189,248,0.8)]"
              >
                Register Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </li>
          </ul>

          {/* Contact Info */}
          <div className="mt-8 p-4 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900 dark:to-purple-900 border-l-4 border-pink-500 dark:border-pink-400 rounded-lg shadow-md">
            <h4 className="text-xl font-bold text-pink-700 dark:text-pink-300 mb-2">
              Contact for Queries
            </h4>
            <p className="text-lg text-gray-800 dark:text-gray-200">
              In case of any query, contact our Faculty Convenor Ms. Deepmala at{" "}
              <a
                href="tel:+919876272716"
                className="text-pink-700 dark:text-pink-300 hover:underline"
              >
                +919876272716
              </a>.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Unchanged Payment Modal */}
      {isModalOpen && (
        <ModalBackdrop onClick={handleCloseModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <h3>Payment Options</h3>
              <CloseButton onClick={handleCloseModal}>×</CloseButton>
            </ModalHeader>
            <ModalBody>
              <ColumnsWrapper>
                <Column>
                  <h4>Scan to Pay</h4>
                  <p>Scan the QR code below to complete your payment.</p>
                  <QRImage src={scanner} alt="QR Code for Payment" />
                </Column>
                <Column>
                  <h4>NEFT/Bank Transfer</h4>
                  <p>Use the following details for bank transfer:</p>
                  <BankDetails>
                    <p>
                      <strong>Account Name:</strong> Doon International School
                    </p>
                    <p>
                      <strong>Bank:</strong> ICICI Bank
                    </p>
                    <p>
                      <strong>Branch:</strong> SCO 31, Sector 67, Mohali
                    </p>
                    <p>
                      <strong>Account No:</strong> 366901000718
                    </p>
                    <p>
                      <strong>IFSC Code:</strong> ICIC0003669
                    </p>
                  </BankDetails>
                </Column>
              </ColumnsWrapper>
            </ModalBody>
          </ModalContent>
        </ModalBackdrop>
      )}
    </section>
  );
};

// Styled Components for Pay Now Button and Modal (Unchanged)
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
  max-width: 600px;
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
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  position: relative;

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    flex-grow: 1;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => (theme === "dark" ? "#f5f5dc" : "#1a1a1a")};
  position: absolute;
  right: 0;
  top: 0;
`;

const ModalBody = styled.div`
  text-align: center;
`;

const ColumnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 640px) {
    &:before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 1px;
      background: ${({ $isDark }) => ($isDark ? "#f5f5dc" : "#1a1a1a")};
      opacity: 0.3;
    }
  }
`;

const Column = styled.div`
  flex: 1;
  text-align: center;

  h4 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    margin-bottom: 15px;
  }
`;

const BankDetails = styled.div`
  text-align: left;
  font-size: 0.9rem;
  line-height: 1.5;

  p {
    margin: 5px 0;
  }
`;

const QRImage = styled.img`
  width: 150px;
  height: 150px;
  margin: 0 auto;
  display: block;
  object-fit: contain;
`;

export default Payment;