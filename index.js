var outline = require('outline-numbering')

function withinPlan (numbering) {
  var first = numbering[0]
  return (
    first.series.number === 1 &&
    first.element.number === 1
  )
}

function withinAddenda (numbering) {
  var first = numbering[0]
  return (
    first.series.number === 1 &&
    first.element.number === 2
  )
}

function stripNounPrefix (string) {
  return string.replace('Section ', '')
}

module.exports = function (numbering, shortForm) {
  var length = numbering.length
  if (length < 1) throw new Error('Invalid numbering')
  var first = numbering[0]
  if (withinPlan(numbering)) {
    if (length === 1) return shortForm ? 'Plan.' : 'the Plan'
    return (
      (!shortForm ? 'Section ' : '') +
      stripNounPrefix(outline(numbering.slice(1), shortForm)) +
      (!shortForm ? ' of the Plan' : '')
    )
  }
  if (withinAddenda(numbering)) {
    if (length === 1) {
      return shortForm ? 'Addenda.' : 'Addenda to the Plan'
    }
    var scheduleNumber = (
      'Addendum ' +
      outline([ numbering[1] ], shortForm).replace('Section ', '')
    )
    if (length === 2) return scheduleNumber
    return (
      (!shortForm ? 'Section ' : '') +
      stripNounPrefix(outline(numbering.slice(2), shortForm)) +
      (!shortForm ? (' of ' + scheduleNumber) : '')
    )
  }
  var inFirstSeries = numbering[0].series.number === 1
  var exhibitNumber = (
    'Exhibit ' +
    stripNounPrefix(
      outline(
        [
          {
            series: {
              number: first.series.number,
              of: first.series.of
            },
            element: {
              number: inFirstSeries
                ? first.element.number - 2
                : first.element.number,
              of: inFirstSeries
                ? first.element.of - 2
                : first.element.of
            }
          }
        ],
        shortForm
      )
    )
  )
  if (length === 1) return exhibitNumber
  return (
    (!shortForm ? 'Section ' : '') +
    stripNounPrefix(outline(numbering.slice(1), shortForm)) +
    (!shortForm ? (' of ' + exhibitNumber) : '')
  )
}
