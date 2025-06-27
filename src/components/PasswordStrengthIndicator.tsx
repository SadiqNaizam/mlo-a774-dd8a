import React, { useState, useEffect } from 'react';

interface PasswordStrengthIndicatorProps {
  password?: string;
}

const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({ password = '' }) => {
  const [strength, setStrength] = useState({
    score: 0,
    level: '',
    color: '',
    value: 0,
  });

  useEffect(() => {
    console.log('PasswordStrengthIndicator loaded or password changed.');
    let score = 0;
    const checks = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      specialChar: /[^A-Za-z0-9]/.test(password),
    };

    if (password.length > 0) {
      score = Object.values(checks).filter(Boolean).length;
      // A password under 8 chars is always weak
      if (!checks.length) {
        score = 1;
      }
    }

    let level = '';
    let color = '';
    let value = 0;

    switch (score) {
      case 0:
      case 1:
      case 2:
        level = 'Weak';
        color = 'bg-red-500';
        value = 33;
        break;
      case 3:
      case 4:
        level = 'Medium';
        color = 'bg-yellow-500';
        value = 66;
        break;
      case 5:
        level = 'Strong';
        color = 'bg-green-500';
        value = 100;
        break;
      default:
        break;
    }
    
    if (password.length === 0) {
      setStrength({ score: 0, level: '', color: '', value: 0 });
    } else {
      setStrength({ score, level, color, value });
    }

  }, [password]);

  return (
    <div className="w-full space-y-1">
      {password.length > 0 && (
        <>
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-300 ease-in-out ${strength.color}`}
              style={{ width: `${strength.value}%` }}
              role="progressbar"
              aria-valuenow={strength.value}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`Password strength: ${strength.level}`}
            ></div>
          </div>
          <p className="text-xs text-muted-foreground">
            Password strength: <span className="font-semibold">{strength.level}</span>
          </p>
        </>
      )}
    </div>
  );
};

export default PasswordStrengthIndicator;