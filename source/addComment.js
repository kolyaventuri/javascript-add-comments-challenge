(() => {
  let newCommentForm, comment, author, comments;

  $(document).ready(function(){
    comments = $('#comments');

    let newCommentBtn = $('#new_comment_button');
    newCommentForm = $('#new_comment');

    comment = $('#new_comment #comment');
    author = $('#new_comment #author');

    // Show the form
    $(newCommentBtn).click(() => {
      $(newCommentForm).show();
    });

    // Handle form submission
    $(newCommentForm).submit(addComment);
  });

  const addComment = (event) => {
    event.preventDefault();

    let _comment = buildComment( $(comment).val(), $(author).val() );

    $(comments).append(_comment);
  };

  const buildComment = (comment, author) => {

  };
})();
