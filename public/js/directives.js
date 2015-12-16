(function(angular, d3, _) {
  'use strict';

  angular.module('cardioTest.directives', []).directive("barChart", function() {
    var directive = {};
    directive.restrict = 'AE';

    directive.scope = {
    x: '=?',
    y: '=barChart',
    options: '=?',
  };

    directive.link = function(scope, elements, attr) {
    scope.svg = null;
    scope.container = null;

    scope.getX = function() {
      var x = null;
      if (scope.x) {
        x = scope.x;
      } else {
        x = _.keys(scope.y);
      }

      return x;
    };

    scope.getOptions = function() {
      return _.merge({
        width: 2000,
        height: 800,
        margin: {
          top: 10,
          right: 10,
          bottom: 50,
          left: 10,
        },
      }, scope.options || {});
    };
    window.setTimeout(scope.initialize(), 10000);
    scope.initialize = function() {
      scope.svg = d3.select(elements[0]).append('svg').attr('class', 'chart');
      scope.container = scope.svg.append('g');
      scope.container.append('g').attr('class', 'x');
      scope.container.append('g').attr('class', 'y', 'grid');
      scope.setSvgSize();
      scope.svg.call(tip);

      scope.svg.selectAll('rect')
      .append('rect')
      .attr('width', function() { return x.rangeBand() || 1 })
      .attr('height', function(d) { return h - y(d) })
      .attr('y', function(d) { return y(d) })
      .attr('x', function(d, i) { return x(i) })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);
    };

    scope.setSvgSize = function() {
      var options = scope.getOptions();
      scope.container.attr("transform", "translate(" + options.margin.left + ", " + options.margin.right + ")");
      scope.svg.attr('viewBox', '0 0 ' + (options.width + options.margin.left + options.margin.right) + ' ' +
        (options.height + options.margin.top + options.margin.bottom))
        .attr('preserveAspectRatio', 'xMinYMin');
      scope.redrawX();
    };

    scope.redrawX = function() {

      var x, y, xAxis, yAxis, dataset, options = scope.getOptions(), xValues = scope.getX(), yValues = scope.y;
      if (xValues && yValues) {
        d3.scale.category20c();
        _.dropRight(xValues, 15);
        x = d3.scale.ordinal().domain(xValues).rangeRoundBands([0, options.width], 0);
        y = d3.scale.linear().domain([0, d3.max(yValues)]).range([options.height, 0]);
        xAxis = d3.svg.axis().scale(x).orient('bottom').ticks(10).tickSize(50);
        yAxis = d3.svg.axis().scale(y).orient('left').ticks(10).tickSize(1, 1);
        scope.container.selectAll('g.x').attr('transform', "translate(0, " + options.height + ")").call(xAxis);
        scope.container.selectAll('g.y').call(yAxis);
        dataset = scope.container.selectAll('.bar').data(yValues).on('mouseover', tip.show).on('mouseout', tip.hide);
        dataset.enter().append('rect').attr('class', 'bar');
        dataset.transition().attr('x', function(d, i) {
          return i * x.rangeBand();
        }).attr('width', function() {
          return x.rangeBand() - 15;
        }).attr('height', function(d) {
          return options.height - y(d);
        }).attr('y', function(d) {
          return y(d);
        });

        dataset.exit().remove();
      }
    };

    /* Initialize tooltip */
    var tip = d3.tip().attr('class', 'd3-tip').html(function(d) { return d;
  });

    scope.redrawY = function() {
      var x, y, xAxis, yAxis, dataset, options = scope.getOptions(), xValues = scope.getX(), yValues = scope.y;
      if (xValues && yValues) {
        var warmup = [2, 2, 2, 2, 2, 7, 7, 7, 6, 5, 4, 3, 2, 1];
        for (var i = 0; i < warmup.length; i++) {
          _.dropRight(scope.y.unshift(warmup[i]), 15);

        };
        d3.scale.category20c();
        x = d3.scale.ordinal().domain(xValues).rangeRoundBands([0, options.width], 0);
        y = d3.scale.linear().domain([0, d3.max(yValues)]).range([options.height, 0]);
        xAxis = d3.svg.axis().scale(x).orient('bottom').ticks(1).tickSize(5);
        yAxis = d3.svg.axis().scale(y).orient('left').ticks(10).tickSize(-2000);
        scope.container.selectAll('g.x').attr('transform', "translate(0, " + options.height + ")").call(xAxis);
        scope.container.selectAll('g.y').call(yAxis);
        dataset = scope.container.selectAll('.bar').data(yValues).on('mouseover', tip.show).on('mouseout', tip.hide);
        dataset
        .enter()
        .append('rect')
        .attr('class', 'bar');
        dataset.transition().attr('x', function(d, i) {
          return i * x.rangeBand();
        }).attr('width', function() {
          return x.rangeBand() - 10;
        }).attr('height', function(d) {
          return options.height - y(d);
        }).attr('y', function(d) {
          return y(d);
        });

        dataset.exit().remove();
      }
    };

    scope.$watch('x', scope.redrawX);
    scope.$watch('y', scope.redrawY);
    scope.$watch('options', scope.setSvgSize);
    scope.initialize();
  };

    return directive;
  });
}(angular, d3, _));
