import React from 'react';
import { connect } from 'react-redux';
import { createPost, showAlert, hideAlert } from '../redux/actions';

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.changeInputHandler = this.changeInputHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    console.log('onSubmit');
    const { title } = this.state;

    if (!title.trim()) {
      return this.props.showAlert('Название поста не может быть пустым');
    }

    const newPost = {
      title,
      id: Date.now(),
    };

    this.props.createPost(newPost);

    this.setState({
      title: '',
    });

    console.log(newPost);
  }

  changeInputHandler(event) {
    event.persist();
    console.log('change input handler');
    this.setState(prev => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="title">Заголовок поста</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.changeInputHandler}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Создать
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createPost,
  showAlert,
  hideAlert,
};

export default connect(null, mapDispatchToProps)(PostForm);
