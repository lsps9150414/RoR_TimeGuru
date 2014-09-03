$(function() {
    //jQuery sortable
    $( "#stuff, .priority" ).sortable({
        scroll: false,
        connectWith: ".connectedSortable",
        opacity: 0.7,
        tolerance: "pointer",
        cursor: "move",
        placeholder: "stuff-drag-placeholder"
    }).disableSelection();
    
    $( "#stuff, .priority" ).on( "sortreceive", function( event, ui ) {
        var request_url = "main/assignPriority?stuff_id=" + $(ui.item).attr('data-id');
        
        if ($(this).attr('data-id')) {  // 'this' = the .priority beeing called
            request_url += '&priority_id=' + $(this).attr('data-id');
            console.log($(this).attr('data-id'));
        }
        //ajax for sorting
        $.get( request_url, function( data ) {
            console.log(data);
        });
    });
    
    $('#datetimepicker1').datetimepicker();
    
    // ajax for create new stuff
    // Attach a submit handler to the form
    $( "#new_stuff_form" ).submit(function( event ) {
        // Stop form from submitting normally
        event.preventDefault();

        // Get some values from elements on the page:
        var $form = $( this ),
            title = $form.find( "#new_stuff_title" ).val(),
            url = $form.attr( "action" );

        // Send the data using post
//        var posting = $.post( url, { title: title } );
        var posting = $.post( url, function(){ alert("ok") } );
        
        posting.done(function( data ) {
            console.log(data);
        });
    });
});