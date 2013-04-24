'use strict'

describe('tzDate', function () {
  var scope, $sandbox, $compile, $timeout

  beforeEach(module('timezonejs'))

  beforeEach(inject(function ($injector, $rootScope, _$compile_, _$timeout_) {
    scope = $rootScope
    $compile = _$compile_
    $timeout = _$timeout_

    $sandbox = $('<div id="sandbox"></div>').appendTo($('body'))
  }))

  var compile = function (scenario) {
    scenario = scenarios[scenario]
    angular.extend(scope, scenario.scope)

    var $element = $(scenario.element).appendTo($sandbox)

    $element = $compile($element)(scope)
    scope.$digest()

    return $element
  }

  afterEach(function () {
    $sandbox.remove()
    scope.$destroy()
  })

  var scenarios = {
    'America/Chicago' : {
      scope : {
        reference : new Date(Date.parse('1970-01-01T00:00:00+00:00')),
        timezone : 'America/Chicago'
      },
      element : '<span>{{reference|tzDate:timezone|date:"yyyy-MM-dd HH:mm:ss Z"}}</span>'
    }
  }

  it('should format reference date to America/Chicago', function () {
    var el = compile('America/Chicago')
    expect(el.text()).toEqual('1969-12-31 18:00:00 -0600')
  })

})