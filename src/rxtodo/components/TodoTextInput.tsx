import * as React from 'react';

const ENTER_KEY_CODE = 13;

interface Props {
  className?: string;
  id?: string;
  placeholder?: string;
  onSave: (value: string) => void;
  value?: string;
}

interface State {
  value: string;
}

export default class TodoTextInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { value: props.value ? props.value : '' };
  }

  render() {
    return (
      <input
        className={this.props.className}
        id={this.props.id}
        placeholder={this.props.placeholder}
        onBlur={() => {
          this.save();
        }}
        onChange={(event: React.FormEvent<HTMLInputElement>) => {
          this.onChange(event);
        }}
        onKeyDown={(event: React.KeyboardEvent<any>) => {
          this.onKeyDown(event);
        }}
        value={this.state.value}
        autoFocus={true}
      />
    );
  }

  private save(): void {
    this.props.onSave(this.state.value);
    this.setState({ value: '' });
  }

  private onChange(event: React.FormEvent<HTMLInputElement>): void {
    this.setState({ value: (event.target as HTMLInputElement)['value'] });
    // this.setState({ value: event.target.value });
  }

  private onKeyDown(event: React.KeyboardEvent<any>): void {
    if (event.keyCode === ENTER_KEY_CODE) {
      this.save();
    }
  }
}
