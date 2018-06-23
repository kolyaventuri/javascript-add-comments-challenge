(() => {
  let newCommentForm, comment, author;

  $(document).ready(function(){
    let newCommentBtn = $('#new_comment_button');
    newCommentForm = $('#new_comment');

    comment = $('#new_comment #comment');
    author = $('#new_comment #author');

    let addCommentBtn = $('#new_comment input[type="submit"]');

    $(newCommentBtn).click(() => {
      $(newCommentForm).show();
    });
  });
})();
