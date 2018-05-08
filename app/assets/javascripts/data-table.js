$(function() {

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

  // This way, you can access Handsontable api methods by passing their names as an argument, e.g.:
  var hotInstance = $("#dataTable").handsontable('getInstance');

  // ----------------------------------------

  function getCarData() {
  return [
    {cov: 'Employee Only', empCost: 99.73, eCost: 299.73, fee1: 5.0},
    {cov: 'Employee + Spouse', empCost: 99.73, eCost: 301.99, fee1: 4.0},
    {cov: 'Chrysler', empCost: 99.73, eCost: 305.00, fee1: 6.0},
    {cov: 'Volvo', empCost: 100.00, eCost: 310.00, fee1: 4.5}
  ];
}

  var container1 = document.getElementById('employee');
  var hot1;

  hot1 = new Handsontable(container1, {
    data: getCarData(),
    colHeaders: ['Cost Group / Coverage Level', 'Employee Monthly Cost', 'Employer Monthly Cost', 'Billing Fee'],
    columns: [
      {
        data: 'cov',
        editor: false
      },
      {
        data: 'empCost',
        editor: 'numeric'
      },
      {
        data: 'eCost',
        editor: 'text'
      },
      {
        data: 'fee1',
        editor: 'text'
      }
    ]
  });

});
