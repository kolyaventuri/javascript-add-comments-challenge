(() => {
  let newCommentForm, comment, author, comments;

  $(document).ready(function(){
    comments = $('#comment_list');

    let newCommentBtn = $('#new_comment_button');
    newCommentForm = $('#new_comment');

    comment = $('#new_comment #comment');
    author = $('#new_comment #authorName');

    // Show the form
    $(newCommentBtn).click(() => {
      $(newCommentForm).show();
    });

    // Handle form submission
    $(newCommentForm).submit(addComment);
  });

  const addComment = (event) => {
    event.preventDefault();
    let _content =  $(comment).val();

    if(!_content) return;

    let _comment = buildComment(_content, $(author).val() );

    $(comments).append(_comment);
  };

  const buildComment = (comment, author) => {
    let _comment = $('<li></li>');
    let _author = $('<span></span>');

    $(_comment).text(comment);

    $(_author).addClass('author').text(author);

    $(_comment).append(_author);

    return _comment;
  };
})();
