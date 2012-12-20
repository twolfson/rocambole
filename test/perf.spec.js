/*global describe:false, it:false */
"use strict";

var expect = require('expect.js');
var walker = require('../lib/walker');

var _fs = require('fs');


describe('performance', function () {

    it('should be fast :P', function () {
        var file = _fs.readFileSync( __dirname +'/files/crossroads.js', 'utf-8');
        var startTime = process.hrtime();
        var ast = walker.parse(file);
        var diff = process.hrtime(startTime);
        expect( diff[1] ).to.be.below( 400000000 );
        expect( ast.startToken ).not.to.be( undefined );
    });

    xit('should not take forever to instrument jQuery', function () {
        var file = _fs.readFileSync( __dirname +'/files/jquery.js', 'utf-8');
        var startTime = process.hrtime();
        var ast = walker.parse(file);
        var diff = process.hrtime(startTime);
        expect( diff[0] ).to.be.below( 40000 );
        expect( ast.startToken ).not.to.be( undefined );
    });


});
