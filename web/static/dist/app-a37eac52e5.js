"use strict";function confirmDangerousAction(t){var e=$(t);e.is("a")||(e=e.closest("a"));var n="Are you sure?";e.data("confirm-title")&&(n=e.data("confirm-title"));var a=!0;(e.hasClass("btn-success")||e.hasClass("btn-outline-success"))&&(a=!1);var s=e.clone().children().remove().end().text();return swal({title:n,buttons:[!0,s],dangerMode:a})}function styleForm(t,e){var n=$.extend({},{placeholder:"Select...",no_results:"No results found!",advanced:"Advanced"},e),a=$(t);$.fn.dirrty&&a.dirrty(),a.find("input:not(input[type=button],input[type=submit],input[type=reset],input[type=radio],input[type=checkbox]),textarea,select").addClass("form-control"),a.find("select").wrap('<div class="select" />').chosen({width:"100%",placeholder_text_single:n.placeholder,placeholder_text_multiple:n.placeholder,no_results_text:n.no_results}),autosize(a.find("textarea")),a.find("input[type=radio]").each(function(){$(this).addClass("custom-control-input"),$(this).closest(".form-field"),$(this).next("label").addClass("custom-control-label").addBack().wrapAll('<div class="custom-control custom-radio" />')}),a.find("input[type=checkbox]").each(function(){$(this).addClass("custom-control-input"),$(this).closest(".form-field"),$(this).next("label").addClass("custom-control-label").addBack().wrapAll('<div class="custom-control custom-checkbox" />')}),a.find(".help-block").addClass("form-text"),a.find(".help-block.form-error").parent().addClass("has-error"),a.find(".help-block.form-success").parent().addClass("has-success"),a.find(".help-block.form-warning").parent().addClass("has-warning"),a.find("label.advanced,fieldset.advanced legend").prepend('<span class="text-info">'+n.advanced+"</span> "),a.find("input[type=button],input[type=submit],input[type=reset]").addClass("btn m-t-10");var s=a.find(".has-error:visible");0<s.length&&$([document.documentElement,document.body]).animate({scrollTop:s.first().offset().top-$("#header").outerHeight()-15},1e3)}function notify(t,e,n){var a={type:e,allow_dismiss:!0,label:"Cancel",className:"btn-xs btn-inverse align-right",placement:{from:"top",align:"right"},delay:1e4,z_index:8,animate:{enter:"animated fadeIn",exit:"animated fadeOut"},offset:{x:20,y:85}};n&&(a.placement.from="top",a.placement.align="center",a.offset.y=20),$.notify({message:t},a)}$(function(){$("a.btn-danger,a.btn[data-confirm-title]").on("click",function(t){t.preventDefault();var e=$(this).attr("href");return confirmDangerousAction(t.target).then(function(t){t&&(window.location.href=e)}),!1})}),$("form button.file-upload").on("click",function(t){var e=$(this).siblings("input[type=file]")[0];$(e).trigger("click")}),$("form input[type=file]").change(function(t){var e=$(this).siblings(".file-name")[0];$(e).text($(this).val().split("\\").pop())});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0tZGFuZ2VyLmpzIiwiZm9ybS5qcyIsIm5vdGlmeS5qcyJdLCJuYW1lcyI6WyJjb25maXJtRGFuZ2Vyb3VzQWN0aW9uIiwiZWwiLCIkZWwiLCIkIiwiaXMiLCJjbG9zZXN0IiwiY29uZmlybVRpdGxlIiwiZGF0YSIsImRhbmdlck1vZGUiLCJoYXNDbGFzcyIsImJ1dHRvblRleHQiLCJjbG9uZSIsImNoaWxkcmVuIiwicmVtb3ZlIiwiZW5kIiwidGV4dCIsInN3YWwiLCJ0aXRsZSIsImJ1dHRvbnMiLCJzdHlsZUZvcm0iLCJmb3JtIiwidHJhbnNsYXRpb25zIiwibGFuZyIsImV4dGVuZCIsInBsYWNlaG9sZGVyIiwibm9fcmVzdWx0cyIsImFkdmFuY2VkIiwiJGZvcm0iLCJmbiIsImRpcnJ0eSIsImZpbmQiLCJhZGRDbGFzcyIsIndyYXAiLCJjaG9zZW4iLCJ3aWR0aCIsInBsYWNlaG9sZGVyX3RleHRfc2luZ2xlIiwicGxhY2Vob2xkZXJfdGV4dF9tdWx0aXBsZSIsIm5vX3Jlc3VsdHNfdGV4dCIsImF1dG9zaXplIiwiZWFjaCIsInRoaXMiLCJuZXh0IiwiYWRkQmFjayIsIndyYXBBbGwiLCJwYXJlbnQiLCJwcmVwZW5kIiwiZXJyb3JfZmllbGRzIiwibGVuZ3RoIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsImZpcnN0Iiwib2Zmc2V0IiwidG9wIiwib3V0ZXJIZWlnaHQiLCJub3RpZnkiLCJtZXNzYWdlIiwidHlwZSIsIm1pbmltYWxfbGF5b3V0IiwiZ3Jvd2xTZXR0aW5ncyIsImFsbG93X2Rpc21pc3MiLCJsYWJlbCIsImNsYXNzTmFtZSIsInBsYWNlbWVudCIsImZyb20iLCJhbGlnbiIsImRlbGF5Iiwiel9pbmRleCIsImVudGVyIiwiZXhpdCIsIngiLCJ5Iiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJsaW5rVXJsIiwiYXR0ciIsInRhcmdldCIsInRoZW4iLCJ2YWx1ZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImlucHV0RWxlbWVudCIsInNpYmxpbmdzIiwidHJpZ2dlciIsImNoYW5nZSIsImZpbGVOYW1lRWxlbWVudCIsInZhbCIsInNwbGl0IiwicG9wIl0sIm1hcHBpbmdzIjoiYUFBQSxTQUFTQSx1QkFBdUJDLEdBQzVCLElBQUlDLEVBQU1DLEVBQUVGLEdBRVBDLEVBQUlFLEdBQUcsT0FDUkYsRUFBTUEsRUFBSUcsUUFBUSxNQUd0QixJQUFJQyxFQUFlLGdCQUNmSixFQUFJSyxLQUFLLG1CQUNURCxFQUFlSixFQUFJSyxLQUFLLGtCQUc1QixJQUFJQyxHQUFhLEdBQ2JOLEVBQUlPLFNBQVMsZ0JBQWtCUCxFQUFJTyxTQUFTLDBCQUM1Q0QsR0FBYSxHQUtqQixJQUFJRSxFQUFhUixFQUFJUyxRQUFRQyxXQUFXQyxTQUFTQyxNQUFNQyxPQUV2RCxPQUFPQyxLQUFLLENBQ1JDLE1BQU9YLEVBQ1BZLFFBQVMsRUFBQyxFQUFNUixHQUNoQkYsV0FBWUEsSUN4QnBCLFNBQVNXLFVBQVVDLEVBQU1DLEdBRXJCLElBQUlDLEVBQU9uQixFQUFFb0IsT0FBTyxHQUFJLENBQ3BCQyxZQUFlLFlBQ2ZDLFdBQWMsb0JBQ2RDLFNBQVksWUFDYkwsR0FFQ00sRUFBUXhCLEVBQUVpQixHQUdWakIsRUFBRXlCLEdBQUdDLFFBQ0xGLEVBQU1FLFNBR1ZGLEVBQU1HLEtBQUssNkhBQTZIQyxTQUFTLGdCQUVqSkosRUFBTUcsS0FBSyxVQUFVRSxLQUFLLDBCQUEwQkMsT0FBTyxDQUN2REMsTUFBTyxPQUNQQyx3QkFBeUJiLEVBQUtFLFlBQzlCWSwwQkFBMkJkLEVBQUtFLFlBQ2hDYSxnQkFBaUJmLEVBQUtHLGFBRzFCYSxTQUFTWCxFQUFNRyxLQUFLLGFBRXBCSCxFQUFNRyxLQUFLLHFCQUFxQlMsS0FBSyxXQUNqQ3BDLEVBQUVxQyxNQUFNVCxTQUFTLHdCQUNqQjVCLEVBQUVxQyxNQUFNbkMsUUFBUSxlQUNoQkYsRUFBRXFDLE1BQU1DLEtBQUssU0FBU1YsU0FBUyx3QkFBd0JXLFVBQVVDLFFBQVEsaURBRTdFaEIsRUFBTUcsS0FBSyx3QkFBd0JTLEtBQUssV0FDcENwQyxFQUFFcUMsTUFBTVQsU0FBUyx3QkFDakI1QixFQUFFcUMsTUFBTW5DLFFBQVEsZUFFaEJGLEVBQUVxQyxNQUFNQyxLQUFLLFNBQ1JWLFNBQVMsd0JBQ1RXLFVBQ0FDLFFBQVEsb0RBR2pCaEIsRUFBTUcsS0FBSyxlQUFlQyxTQUFTLGFBQ25DSixFQUFNRyxLQUFLLDBCQUEwQmMsU0FBU2IsU0FBUyxhQUN2REosRUFBTUcsS0FBSyw0QkFBNEJjLFNBQVNiLFNBQVMsZUFDekRKLEVBQU1HLEtBQUssNEJBQTRCYyxTQUFTYixTQUFTLGVBR3pESixFQUFNRyxLQUFLLDJDQUNOZSxRQUFRLDJCQUEyQnZCLEVBQUtJLFNBQVMsWUFFdERDLEVBQU1HLEtBQUssMkRBQTJEQyxTQUFTLGNBRy9FLElBQUllLEVBQWVuQixFQUFNRyxLQUFLLHNCQUNKLEVBQXRCZ0IsRUFBYUMsUUFDYjVDLEVBQUUsQ0FBQzZDLFNBQVNDLGdCQUFpQkQsU0FBU0UsT0FBT0MsUUFBUSxDQUNqREMsVUFBV04sRUFBYU8sUUFBUUMsU0FBU0MsSUFBTXBELEVBQUUsV0FBV3FELGNBQWdCLElBQzdFLEtDekRYLFNBQVNDLE9BQU9DLEVBQVNDLEVBQU1DLEdBRTNCLElBQUlDLEVBQWdCLENBQ2hCRixLQUFNQSxFQUNORyxlQUFlLEVBQ2ZDLE1BQU8sU0FDUEMsVUFBVyxpQ0FDWEMsVUFBVyxDQUNQQyxLQUFNLE1BQ05DLE1BQU8sU0FFWEMsTUFBTyxJQUNQQyxRQUFTLEVBQ1RsQixRQUFTLENBQ0xtQixNQUFPLGtCQUNQQyxLQUFNLG9CQUVWakIsT0FBUSxDQUNKa0IsRUFBRyxHQUNIQyxFQUFHLEtBSVBiLElBQ0FDLEVBQWNJLFVBQVVDLEtBQU8sTUFDL0JMLEVBQWNJLFVBQVVFLE1BQVEsU0FDaENOLEVBQWNQLE9BQU9tQixFQUFJLElBRzdCdEUsRUFBRXNELE9BQU8sQ0FBRUMsUUFBU0EsR0FBV0csR0ZEbkMxRCxFQUFFLFdBRUVBLEVBQUUsMENBQTBDdUUsR0FBRyxRQUFTLFNBQVNDLEdBQzdEQSxFQUFFQyxpQkFFRixJQUFNQyxFQUFVMUUsRUFBRXFDLE1BQU1zQyxLQUFLLFFBTTdCLE9BTEE5RSx1QkFBdUIyRSxFQUFFSSxRQUFRQyxLQUFLLFNBQUNDLEdBQy9CQSxJQUNBQyxPQUFPQyxTQUFTQyxLQUFPUCxNQUd4QixNQ3VCZjFFLEVBQUUsMkJBQTJCdUUsR0FBRyxRQUFTLFNBQVNDLEdBQzlDLElBQUlVLEVBQWVsRixFQUFFcUMsTUFBTThDLFNBQVMsb0JBQW9CLEdBRXhEbkYsRUFBRWtGLEdBQWNFLFFBQVEsV0FHNUJwRixFQUFFLHlCQUF5QnFGLE9BQU8sU0FBVWIsR0FDeEMsSUFBSWMsRUFBa0J0RixFQUFFcUMsTUFBTThDLFNBQVMsY0FBYyxHQUNyRG5GLEVBQUVzRixHQUFpQjFFLEtBQUtaLEVBQUVxQyxNQUFNa0QsTUFBTUMsTUFBTSxNQUFNQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjb25maXJtRGFuZ2Vyb3VzQWN0aW9uKGVsKSB7XHJcbiAgICBsZXQgJGVsID0gJChlbCk7XHJcblxyXG4gICAgaWYgKCEkZWwuaXMoJ2EnKSkge1xyXG4gICAgICAgICRlbCA9ICRlbC5jbG9zZXN0KCdhJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNvbmZpcm1UaXRsZSA9ICdBcmUgeW91IHN1cmU/JztcclxuICAgIGlmICgkZWwuZGF0YSgnY29uZmlybS10aXRsZScpKSB7XHJcbiAgICAgICAgY29uZmlybVRpdGxlID0gJGVsLmRhdGEoJ2NvbmZpcm0tdGl0bGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGFuZ2VyTW9kZSA9IHRydWU7XHJcbiAgICBpZiAoJGVsLmhhc0NsYXNzKCdidG4tc3VjY2VzcycpIHx8ICRlbC5oYXNDbGFzcygnYnRuLW91dGxpbmUtc3VjY2VzcycpKSB7XHJcbiAgICAgICAgZGFuZ2VyTW9kZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGpRdWVyeSB0cmljayB0byBwdWxsIGFuIGl0ZW0ncyB0ZXh0IHdpdGhvdXQgaW5uZXIgSFRNTCBlbGVtZW50cy5cclxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzg2MjQ1OTIvaG93LXRvLWdldC1vbmx5LWRpcmVjdC10ZXh0LXdpdGhvdXQtdGFncy13aXRoLWpxdWVyeS1pbi1odG1sXHJcbiAgICBsZXQgYnV0dG9uVGV4dCA9ICRlbC5jbG9uZSgpLmNoaWxkcmVuKCkucmVtb3ZlKCkuZW5kKCkudGV4dCgpO1xyXG5cclxuICAgIHJldHVybiBzd2FsKHtcclxuICAgICAgICB0aXRsZTogY29uZmlybVRpdGxlLFxyXG4gICAgICAgIGJ1dHRvbnM6IFt0cnVlLCBidXR0b25UZXh0XSxcclxuICAgICAgICBkYW5nZXJNb2RlOiBkYW5nZXJNb2RlXHJcbiAgICB9KTtcclxufVxyXG5cclxuJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAkKCdhLmJ0bi1kYW5nZXIsYS5idG5bZGF0YS1jb25maXJtLXRpdGxlXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxpbmtVcmwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuICAgICAgICBjb25maXJtRGFuZ2Vyb3VzQWN0aW9uKGUudGFyZ2V0KS50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbGlua1VybDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4iLCJmdW5jdGlvbiBzdHlsZUZvcm0oZm9ybSwgdHJhbnNsYXRpb25zKSB7XG5cbiAgICB2YXIgbGFuZyA9ICQuZXh0ZW5kKHt9LCB7XG4gICAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJTZWxlY3QuLi5cIixcbiAgICAgICAgXCJub19yZXN1bHRzXCI6IFwiTm8gcmVzdWx0cyBmb3VuZCFcIixcbiAgICAgICAgXCJhZHZhbmNlZFwiOiBcIkFkdmFuY2VkXCJcbiAgICB9LCB0cmFuc2xhdGlvbnMpO1xuXG4gICAgdmFyICRmb3JtID0gJChmb3JtKTtcblxuICAgIC8vIFByZXZlbnQgbGVhdmluZyB0aGUgcGFnZSBpZiB0aGUgZm9ybSBpcyBcImRpcnR5XCIgKGhhcyB1bnNhdmVkIGNoYW5nZXMpLlxuICAgIGlmICgkLmZuLmRpcnJ0eSkge1xuICAgICAgICAkZm9ybS5kaXJydHkoKTtcbiAgICB9XG5cbiAgICAkZm9ybS5maW5kKCdpbnB1dDpub3QoaW5wdXRbdHlwZT1idXR0b25dLGlucHV0W3R5cGU9c3VibWl0XSxpbnB1dFt0eXBlPXJlc2V0XSxpbnB1dFt0eXBlPXJhZGlvXSxpbnB1dFt0eXBlPWNoZWNrYm94XSksdGV4dGFyZWEsc2VsZWN0JykuYWRkQ2xhc3MoJ2Zvcm0tY29udHJvbCcpO1xuXG4gICAgJGZvcm0uZmluZCgnc2VsZWN0Jykud3JhcCgnPGRpdiBjbGFzcz1cInNlbGVjdFwiIC8+JykuY2hvc2VuKHtcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBwbGFjZWhvbGRlcl90ZXh0X3NpbmdsZTogbGFuZy5wbGFjZWhvbGRlcixcbiAgICAgICAgcGxhY2Vob2xkZXJfdGV4dF9tdWx0aXBsZTogbGFuZy5wbGFjZWhvbGRlcixcbiAgICAgICAgbm9fcmVzdWx0c190ZXh0OiBsYW5nLm5vX3Jlc3VsdHNcbiAgICB9KTtcblxuICAgIGF1dG9zaXplKCRmb3JtLmZpbmQoJ3RleHRhcmVhJykpO1xuXG4gICAgJGZvcm0uZmluZCgnaW5wdXRbdHlwZT1yYWRpb10nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdjdXN0b20tY29udHJvbC1pbnB1dCcpO1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5mb3JtLWZpZWxkJyk7XG4gICAgICAgICQodGhpcykubmV4dCgnbGFiZWwnKS5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wtbGFiZWwnKS5hZGRCYWNrKCkud3JhcEFsbCgnPGRpdiBjbGFzcz1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1yYWRpb1wiIC8+Jyk7XG4gICAgfSk7XG4gICAgJGZvcm0uZmluZCgnaW5wdXRbdHlwZT1jaGVja2JveF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdjdXN0b20tY29udHJvbC1pbnB1dCcpO1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5mb3JtLWZpZWxkJyk7XG5cbiAgICAgICAgJCh0aGlzKS5uZXh0KCdsYWJlbCcpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sLWxhYmVsJylcbiAgICAgICAgICAgIC5hZGRCYWNrKClcbiAgICAgICAgICAgIC53cmFwQWxsKCc8ZGl2IGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94XCIgLz4nKTtcbiAgICB9KTtcblxuICAgICRmb3JtLmZpbmQoJy5oZWxwLWJsb2NrJykuYWRkQ2xhc3MoJ2Zvcm0tdGV4dCcpO1xuICAgICRmb3JtLmZpbmQoJy5oZWxwLWJsb2NrLmZvcm0tZXJyb3InKS5wYXJlbnQoKS5hZGRDbGFzcygnaGFzLWVycm9yJyk7XG4gICAgJGZvcm0uZmluZCgnLmhlbHAtYmxvY2suZm9ybS1zdWNjZXNzJykucGFyZW50KCkuYWRkQ2xhc3MoJ2hhcy1zdWNjZXNzJyk7XG4gICAgJGZvcm0uZmluZCgnLmhlbHAtYmxvY2suZm9ybS13YXJuaW5nJykucGFyZW50KCkuYWRkQ2xhc3MoJ2hhcy13YXJuaW5nJyk7XG5cbiAgICAvLyBub2luc3BlY3Rpb24gSlNBbm5vdGF0b3JcbiAgICAkZm9ybS5maW5kKCdsYWJlbC5hZHZhbmNlZCxmaWVsZHNldC5hZHZhbmNlZCBsZWdlbmQnKVxuICAgICAgICAucHJlcGVuZCgnPHNwYW4gY2xhc3M9XCJ0ZXh0LWluZm9cIj4nK2xhbmcuYWR2YW5jZWQrJzwvc3Bhbj4gJyk7XG5cbiAgICAkZm9ybS5maW5kKCdpbnB1dFt0eXBlPWJ1dHRvbl0saW5wdXRbdHlwZT1zdWJtaXRdLGlucHV0W3R5cGU9cmVzZXRdJykuYWRkQ2xhc3MoJ2J0biBtLXQtMTAnKTtcblxuICAgIC8vIFNjcm9sbCB0byBlcnJvcnMuXG4gICAgdmFyIGVycm9yX2ZpZWxkcyA9ICRmb3JtLmZpbmQoJy5oYXMtZXJyb3I6dmlzaWJsZScpO1xuICAgIGlmIChlcnJvcl9maWVsZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAkKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogZXJyb3JfZmllbGRzLmZpcnN0KCkub2Zmc2V0KCkudG9wIC0gJCgnI2hlYWRlcicpLm91dGVySGVpZ2h0KCkgLSAxNVxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbn1cblxuJCgnZm9ybSBidXR0b24uZmlsZS11cGxvYWQnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgbGV0IGlucHV0RWxlbWVudCA9ICQodGhpcykuc2libGluZ3MoJ2lucHV0W3R5cGU9ZmlsZV0nKVswXTtcblxuICAgICQoaW5wdXRFbGVtZW50KS50cmlnZ2VyKCdjbGljaycpO1xufSk7XG5cbiQoJ2Zvcm0gaW5wdXRbdHlwZT1maWxlXScpLmNoYW5nZShmdW5jdGlvbiAoZSl7XG4gICAgbGV0IGZpbGVOYW1lRWxlbWVudCA9ICQodGhpcykuc2libGluZ3MoJy5maWxlLW5hbWUnKVswXTtcbiAgICAkKGZpbGVOYW1lRWxlbWVudCkudGV4dCgkKHRoaXMpLnZhbCgpLnNwbGl0KCdcXFxcJykucG9wKCkpO1xufSk7XG4iLCJmdW5jdGlvbiBub3RpZnkobWVzc2FnZSwgdHlwZSwgbWluaW1hbF9sYXlvdXQpIHtcclxuXHJcbiAgICB2YXIgZ3Jvd2xTZXR0aW5ncyA9IHtcclxuICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgIGFsbG93X2Rpc21pc3M6IHRydWUsXHJcbiAgICAgICAgbGFiZWw6ICdDYW5jZWwnLFxyXG4gICAgICAgIGNsYXNzTmFtZTogJ2J0bi14cyBidG4taW52ZXJzZSBhbGlnbi1yaWdodCcsXHJcbiAgICAgICAgcGxhY2VtZW50OiB7XHJcbiAgICAgICAgICAgIGZyb206ICd0b3AnLFxyXG4gICAgICAgICAgICBhbGlnbjogJ3JpZ2h0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVsYXk6IDEwMDAwLFxyXG4gICAgICAgIHpfaW5kZXg6IDgsXHJcbiAgICAgICAgYW5pbWF0ZToge1xyXG4gICAgICAgICAgICBlbnRlcjogJ2FuaW1hdGVkIGZhZGVJbicsXHJcbiAgICAgICAgICAgIGV4aXQ6ICdhbmltYXRlZCBmYWRlT3V0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb2Zmc2V0OiB7XHJcbiAgICAgICAgICAgIHg6IDIwLFxyXG4gICAgICAgICAgICB5OiA4NVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKG1pbmltYWxfbGF5b3V0KSB7XHJcbiAgICAgICAgZ3Jvd2xTZXR0aW5ncy5wbGFjZW1lbnQuZnJvbSA9ICd0b3AnO1xyXG4gICAgICAgIGdyb3dsU2V0dGluZ3MucGxhY2VtZW50LmFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgICAgZ3Jvd2xTZXR0aW5ncy5vZmZzZXQueSA9IDIwO1xyXG4gICAgfVxyXG5cclxuICAgICQubm90aWZ5KHsgbWVzc2FnZTogbWVzc2FnZSB9LCBncm93bFNldHRpbmdzKTtcclxuXHJcbn1cclxuIl19