var outline = require('outline-numbering')

function withinAgreement(numbering) {
  var first = numbering[0]
  return (
    first.series.number === 1 &&
    first.element.number === 1 ) }

function withinSchedules(numbering) {
  var first = numbering[0]
  return (
    first.series.number === 1 &&
    first.element.number === 2 ) }

function stripNounPrefix(string) {
  return string.replace('Section ', '') }

module.exports = function(numbering, shortForm) {
  var length = numbering.length
  if (length < 1) {
    throw new Error('Invalid numbering') }
  var first = numbering[0]
  if (withinAgreement(numbering)) {
    if (length === 1) {
      return ( shortForm ? 'Agreement.' : 'the Agreement' ) }
    else {
      return (
        ( !shortForm ? 'Section ' : '' ) +
        stripNounPrefix(outline(numbering.slice(1), shortForm)) +
        ( !shortForm ? ' of the Agreement' : '' ) ) } }
  else if (withinSchedules(numbering)) {
    if (length === 1) {
      return ( shortForm ? 'Schedules.' : 'Schedules to the Agreement' ) }
    else {
      var scheduleNumber = (
        'Schedule ' +
        outline([ numbering[1] ], shortForm)
          .replace('Section ', '') )
      if (length === 2) {
        return scheduleNumber }
      else {
        return (
          ( !shortForm ? 'Section ' : '' ) +
          stripNounPrefix(outline(numbering.slice(2), shortForm)) +
          ( !shortForm ? ( ' of ' + scheduleNumber ) : '' ) ) } } }
  else {
    var inFirstSeries = ( numbering[0].series.number === 1 )
    var exhibitNumber = (
      'Exhibit ' +
      stripNounPrefix(
        outline(
          [ { series: {
                number: first.series.number,
                of: first.series.of },
              element: {
                number: (
                  inFirstSeries ?
                    ( first.element.number - 2 ) :
                    first.element.number ),
                of: (
                  inFirstSeries ?
                    ( first.element.of - 2 ) :
                    first.element.of ) } } ],
          shortForm)) )
    if (length === 1) {
      return exhibitNumber }
    else {
      return (
        ( !shortForm ? 'Section ' : '' ) +
        stripNounPrefix(outline(numbering.slice(1), shortForm)) +
        ( !shortForm ? ( ' of ' + exhibitNumber ) : '' ) ) } } }
