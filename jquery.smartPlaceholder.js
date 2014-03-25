/* ========================================================================
 * Smart Placeholder - v1.0
 * http://josephilipraja.github.io/jquery-smart-placeholder
 * ========================================================================
 * Made with Love by: Jose Philip Raja
 * Founder & Creative Director of CreaveLabs IT Solutions
 * http://josephilipraja.com, http://creavelabs.com
 * ========================================================================
 * Released under the MIT license.
 * Read more at: http://opensource.org/licenses/MIT
 * ========================================================================
 */
(function($) {
    $.fn.smartPlaceholder = function(options) {

        // Default Settings
        var settings = $.extend({
            text: 'Enter Value', // default text
            backgroundColor: '#fff', // hex, rgb, rgba
            color: '#888', // hex, rgb, rgba
            size: 12, // in pixels
            speed: 0.3, // in secs
            radius: 3, // in pixels
            indent: 5, // in pixels
            position: 'bottom', // 'top' or 'bottom'
            mode: 'extend' // 'inline' or 'extend'
        }, options);

        // SmartPlaceholder Setup
        this.each(function() {
            // Filtering
            if ($(this).is('input:not(input[type=hidden],input[type=file],input[type=disabled],input[type=checkbox],input[type=radio],input[type=submit],input[type=button],input[type=reset]),textarea')) {

                // Variables
                var t = settings.text;
                var pos = 'bottom';

                // Overrides
                if (typeof $(this).prop('placeholder') != 'undefined') {
                    t = $(this).prop('placeholder');
                };
                if (typeof $(this).data('placeholder') != 'undefined') {
                    t = $(this).data('placeholder');
                };

                // Position & Mode
                if (settings.position.toLowerCase() == 'top') {
                    pos = 'top';
                };
                if (typeof $(this).data('position') != 'undefined') {
                    pos = $(this).data('position').toLowerCase();
                };
                if (settings.mode.toLowerCase() == 'extend') {
                    $(this).css('transition', 'all ' + (parseFloat(settings.speed)) + 's ease');
                    $(this).data('smartPlaceholder-elheight', $(this).outerHeight())
                };

                // Add HTMLs
                $(this).wrap('<div class="smartPlaceholderWrapper" style="position:relative;"></div>')
                $(this).after('<div class="smartPlaceholderBox" style="position:absolute; width:98%; margin:0 1%; height:0; background-color:' + settings.backgroundColor + '; color:' + settings.color + '; font-size:' + (parseInt(settings.size)) + 'px; text-align:left; text-indent:' + (parseInt(settings.indent)) + 'px; ' + pos + ':1px; left:0; line-height:0; -webkit-transition: all ' + (parseFloat(settings.speed)) + 's ease; -moz-transition: all ' + (parseFloat(settings.speed)) + 's ease; -o-transition: all ' + (parseFloat(settings.speed)) + 's ease; transition: all ' + (parseFloat(settings.speed)) + 's ease; overflow:hidden; display:block; -webkit-border-' + pos + '-left-radius: ' + (parseInt(settings.radius)) + 'px; -moz-border-' + pos + '-left-radius: ' + (parseInt(settings.radius)) + 'px; border-' + pos + '-left-radius: ' + (parseInt(settings.radius)) + 'px; -webkit-border-' + pos + '-right-radius: ' + (parseInt(settings.radius)) + 'px; -moz-border-' + pos + '-right-radius: ' + (parseInt(settings.radius)) + 'px; border-' + pos + '-right-radius: ' + (parseInt(settings.radius)) + 'px;">' + t + '</div>');
            };
        });

        // Attach to events
        this.on('focus', function(event) {
            // Do animations
            $(this).siblings('.smartPlaceholderBox').css({
                height: (parseInt(settings.size) + 6) + 'px',
                lineHeight: (parseInt(settings.size) + 6) + 'px'
            });
            $(this).data('smartPlaceholder-text', $(this).attr('placeholder')).attr('placeholder', '');
            if (settings.mode.toLowerCase() == 'extend') {
                var elh = (parseInt($(this).data('smartPlaceholder-elheight')));
                $(this).css({
                    height: (elh + parseInt(settings.size) + 6) + 'px',
                    lineHeight: elh + 'px'
                });
            };
        }).on('blur', function(event) {
            // Revert back!
            $(this).siblings('.smartPlaceholderBox').css({
                height: '0',
                lineHeight: '0'
            });
            $(this).attr('placeholder', $(this).data('smartPlaceholder-text'));
            if (settings.mode.toLowerCase() == 'extend') {
                var elh = (parseInt($(this).data('smartPlaceholder-elheight')));
                $(this).css({
                    height: elh + 'px',
                    lineHeight: elh + 'px'
                });
            };
        });
    };
}(jQuery));