import React from 'react';

type SearchFieldProps = object;

interface SearchFieldState {
  value: string;
}

class SearchField extends React.Component<SearchFieldProps, SearchFieldState> {
  constructor(props: SearchFieldProps) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
      />
    );
  }
}

export default SearchField;
