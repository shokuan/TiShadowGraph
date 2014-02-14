Alloy = require('alloy')
$ = Alloy.createController('index')

describe 'index controller', ->
  beforeEach () ->

  describe 'display', ->
    it "label", () ->
      expect($.__views.label.text).toEqual 'Hello, World'