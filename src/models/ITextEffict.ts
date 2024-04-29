interface ITextEffectProps {
    className?: string;
    children?: React.ReactNode;
}

interface ICustomText extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
  children?: React.ReactNode;
}