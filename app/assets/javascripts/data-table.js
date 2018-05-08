$(function() {

  // var data = [
  //   ["", "Ford", "Tesla", "Toyota", "Honda"],
  //   ["2017", 10, 11, 12, 13],
  //   ["2018", 20, 11, 14, 13],
  //   ["2019", 30, 15, 12, 13]
  // ];

  // $("#dataTable").handsontable({
  //   data: data,
  //   // startRows: 6,
  //   // startCols: 8,
  //   rowHeaders: true,
  //   colHeaders: true
  // });

  function getData() {
    return [
      ['', 'Kia', 'Nissan', 'Toyota', 'Honda', 'Mazda', 'Ford'],
      ['2012', 10, 11, 12, 13, 15, 16],
      ['2013', 10, 11, 12, 13, 15, 16],
      ['2014', 10, 11, 12, 13, 15, 16],
      ['2015', 10, 11, 12, 13, 15, 16],
      ['2016', 10, 11, 12, 13, 15, 16]
    ];
  }

  var $container = $("#dataTable");

  $container.handsontable({
    data: getData(),
    rowHeaders: true,
    colHeaders: true,
    contextMenu: true
  });

});
