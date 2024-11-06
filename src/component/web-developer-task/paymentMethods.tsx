import React from "react";

interface PaymentMethod {
  letter: string;
  angle: number;
  lineLength: number;
  x: number;
  y: number;
}

const paymentMethods: PaymentMethod[] = [
  { letter: "V", angle: 10, lineLength: 150, x: 147, y: 6 }, // Visa
  { letter: "M", angle: 20, lineLength: 180, x: 169, y: 41 }, // Mastercard
  { letter: "P", angle: 150, lineLength: 270, x: -234, y: 115 },
  { letter: "Z", angle: 350, lineLength: 380, x: 373, y: -86 }, // PayPal
  { letter: "A", angle: 160, lineLength: 290, x: -282, y: 79 }, // American Express
  { letter: "G", angle: 170, lineLength: 300, x: -304, y: 32 }, // Google Pay
  { letter: "S", angle: 180, lineLength: 410, x: -430, y: -20 }, // SEPA
  { letter: "D", angle: 215, lineLength: 320, x: -291, y: -204 }, // Discover
  { letter: "W", angle: 200, lineLength: 430, x: -432, y: -176 },
  { letter: "W", angle: 190, lineLength: 240, x: -255, y: -62 }, // WeChat Pay
  { letter: "S", angle: 320, lineLength: 350, x: 262, y: -245 }, // Samsung Pay
  { letter: "T", angle: 340, lineLength: 460, x: 428, y: -172 }, // Tether
  { letter: "N", angle: 360, lineLength: 370, x: 350, y: -15 }, // NEO
];

const PaymentCircle: React.FC<PaymentMethod> = ({ letter, x, y }) => (
  <div
    className="circle"
    style={{
      transform: `translate(${x}px, ${y}px)`,
    }}
  >
    {letter}
  </div>
);

const PaymentMethods: React.FC = () => (
  <div className="PaymentMethods py-20">
    <div className="mb-16">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
        All major payment methods
      </h1>
      <p className="text-xl text-muted-foreground">
        We've got all your payments covered
      </p>
    </div>

    <div className="payment-network">
      <div className="central-icon">
        <div className="central-circle">C</div>
      </div>

      {paymentMethods.map((method, index) => (
        <React.Fragment key={index}>
          <div
            className="line"
            style={{
              width: `${method.lineLength}px`,
              transform: `rotate(${method.angle}deg)`,
            }}
          />
          <PaymentCircle {...method} />
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default PaymentMethods;
