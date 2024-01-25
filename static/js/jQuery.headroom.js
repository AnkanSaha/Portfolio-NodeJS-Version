(function ($) {
  if (!$) {
    return
  }

  /// /////////
  // Plugin //
  /// /////////

  $.fn.headroom = function (option) {
    return this.each(function () {
      const $this = $(this)
      let data = $this.data('headroom')
      let options = typeof option === 'object' && option

      options = $.extend(true, {}, Headroom.options, options)

      if (!data) {
        data = new Headroom(this, options)
        data.init()
        $this.data('headroom', data)
      }
      if (typeof option === 'string') {
        data[option]()

        if (option === 'destroy') {
          $this.removeData('headroom')
        }
      }
    })
  }

  /// ///////////
  // Data API //
  /// ///////////

  $('[data-headroom]').each(function () {
    const $this = $(this)
    $this.headroom($this.data())
  })
})(window.Zepto || window.jQuery)
