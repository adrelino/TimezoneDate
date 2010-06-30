/* ************************************************************************

   Copyright:
     (c) 2010 Derrell Lipman
     
   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Derrell Lipman (derrell)

#asset(timezonedate/*)

************************************************************************ */

/**
 */
qx.Class.define("timezonedate.TimezoneDate",
{
  extend : qx.core.Object,


  /**
   * Constructor
   *
   * @param value {Integer|String ? current date/time} 
   *   The timestamp to which this object should be initialized. The value may
   *   in one of two forms: an integer representing the number of milliseconds
   *   since midnight on 1 Jan 1970 UTC; or a string that is in a format
   *   recognized by {#parse}, either in this subclass of Date, or in Date
   *   itself.
   */
  construct : function(value) 
  {
    this.base(arguments);

    // What type of initial value were we given?
    if (value === undefined)
    {
      // No initial value provided. Use the current time.
      this.__date = new Date();
    }
    else if (typeof value == "number")
    {
      this.__date = new Date(value);
    }
    else
    {
      // Parse the date string and set the object value
      this.__date = new Date(this.constructor.parse(value));
    }
    
    // The default output format is ISO8601.
    this.setOutputFormatter(this.constructor._formatIso8601);
  },
  
  properties :
  {
    /**
     * The formatter to use for string output of the date. The default is to
     * use the _formatIso8601 function, which generates a UTC date in ISO8601
     * format.
     */
    outputFormatter :
    {
      check : "Function"
    }
  },

  members :
  {
    __date           : null,
    
    /**
     * Return the day of the month
     *
     * @param tzOffset {Integer ? Current Timezone Offset}
     *   If not specified, the returned result will be in terms of the current
     *   timezone. If specified, this is the number of minutes of time zone
     *   offset difference from UTC. The number is positive to represent west of
     *   Greenwich, England; negative to represent east of Greenwich.
     *
     * @return {Integer}
     *   The day of the month, in the range 1-31.
     */
    getDate : function(tzOffset)
    {
      if (tzOffset === undefined)
      {
        tzOffset = this.constructor.__timezoneOffset;
      }
      
      // Convert the timezone offset to millisecond format
      tzOffset *= 60 * 1000;

      return (new Date(this.__date.getTime() + tzOffset)).getUTCDate();
    },

    /**
     * Return the day of the month (universal time)
     *
     * @return {Integer}
     *   The day of the month, in the range 1-31.
     */
    getUTCDate : function()
    {
      return this.__date.getUTCDate();
    },

    /**
     * Return the day of the week
     *
     * @param tzOffset {Integer ? Current Timezone Offset}
     *   If not specified, the returned result will be in terms of the current
     *   timezone. If specified, this is the number of minutes of time zone
     *   offset difference from UTC. The number is positive to represent west of
     *   Greenwich, England; negative to represent east of Greenwich.
     *
     * @return {Integer}
     *   The day of the week, in the range 0 (Sunday) to 6 (Saturday).
     */
    getDay : function(tzOffset)
    {
      if (tzOffset === undefined)
      {
        tzOffset = this.constructor.__timezoneOffset;
      }
      
      // Convert the timezone offset to millisecond format
      tzOffset *= 60 * 1000;

      return (new Date(this.__date.getTime() + tzOffset)).getUTCDay();
    },

    /**
     * Return the day of the week (universal time)
     *
     * @return {Integer}
     *   The day of the week, in the range 0 (Sunday) to 6 (Saturday).
     */
    getUTCDay : function()
    {
      return this.__date.getUTCDay();
    },

    /**
     * Return the year
     *
     * @param tzOffset {Integer ? Current Timezone Offset}
     *   If not specified, the returned result will be in terms of the current
     *   timezone. If specified, this is the number of minutes of time zone
     *   offset difference from UTC. The number is positive to represent west of
     *   Greenwich, England; negative to represent east of Greenwich.
     *
     * @return {Integer}
     *   The full 4-digit year
     */
    getFullYear : function(tzOffset)
    {
      if (tzOffset === undefined)
      {
        tzOffset = this.constructor.__timezoneOffset;
      }
      
      // Convert the timezone offset to millisecond format
      tzOffset *= 60 * 1000;

      return (new Date(this.__date.getTime() + tzOffset)).getUTCFullYear();
    },

    /**
     * Return the year (universal time)
     *
     * @return {Integer}
     *   The full 4-digit year
     */
    getUTCFullYear : function()
    {
      return this.__date.getUTCFullYear();
    },

    /**
     * Return the hours field of the date
     *
     * @param tzOffset {Integer ? Current Timezone Offset}
     *   If not specified, the returned result will be in terms of the current
     *   timezone. If specified, this is the number of minutes of time zone
     *   offset difference from UTC. The number is positive to represent west of
     *   Greenwich, England; negative to represent east of Greenwich.
     *
     * @return {Integer}
     *   The hours field of the date, in the range 0 (midnight) to 23 (11pm)
     */
    getHours : function(tzOffset)
    {
      if (tzOffset === undefined)
      {
        tzOffset = this.constructor.__timezoneOffset;
      }
      
      // Convert the timezone offset to millisecond format
      tzOffset *= 60 * 1000;

      return (new Date(this.__date.getTime() + tzOffset)).getUTCHours();
    },

    /**
     * Return the hours field of the date (universal time)
     *
     * @return {Integer}
     *   The hours field of the date, in the range 0 (midnight) to 23 (11pm)
     */
    getUTCHours : function()
    {
      return this.__date.getUTCHours();
    },

    /**
     * Return the milliseconds field of the date
     *
     * @param tzOffset {Integer ? Current Timezone Offset}
     *   If not specified, the returned result will be in terms of the current
     *   timezone. If specified, this is the number of minutes of time zone
     *   offset difference from UTC. The number is positive to represent west of
     *   Greenwich, England; negative to represent east of Greenwich.
     *
     * @return {Integer}
     *   The milliseconds field of the date
     */
    getMilliseconds : function(tzOffset)
    {
      if (tzOffset === undefined)
      {
        tzOffset = this.constructor.__timezoneOffset;
      }
      
      // Convert the timezone offset to millisecond format
      tzOffset *= 60 * 1000;

      return (new Date(this.__date.getTime() + tzOffset)).getUTCMilliseconds();
    },

    /**
     * Return the milliseconds field of the date (universal time)
     *
     * @return {Integer}
     *   The milliseconds field of the date
     */
    getUTCMilliseconds : function()
    {
      return this.__date.getUTCMilliseconds();
    },

    /**
     * Return the minutes field of the date
     *
     * @param tzOffset {Integer ? Current Timezone Offset}
     *   If not specified, the returned result will be in terms of the current
     *   timezone. If specified, this is the number of minutes of time zone
     *   offset difference from UTC. The number is positive to represent west of
     *   Greenwich, England; negative to represent east of Greenwich.
     *
     * @return {Integer}
     *   The minutes field of the date, in the range 0-59
     */
    getMinutes : function(tzOffset)
    {
      if (tzOffset === undefined)
      {
        tzOffset = this.constructor.__timezoneOffset;
      }
      
      // Convert the timezone offset to millisecond format
      tzOffset *= 60 * 1000;

      return (new Date(this.__date.getTime() + tzOffset)).getUTCMinutes();
    },

    /**
     * Return the minutes field of the date (universal time)
     *
     * @return {Integer}
     *   The minutes field of the date, in the range 0-59
     */
    getUTCMinutes : function()
    {
      return this.__date.getUTCMinutes();
    },

    /**
     * Return the month of the date
     *
     * @param tzOffset {Integer ? Current Timezone Offset}
     *   If not specified, the returned result will be in terms of the current
     *   timezone. If specified, this is the number of minutes of time zone
     *   offset difference from UTC. The number is positive to represent west of
     *   Greenwich, England; negative to represent east of Greenwich.
     *
     * @return {Integer}
     *   The month field of the date, in the range 0 (January) to 11 (December)
     */
    getMonth : function(tzOffset)
    {
      if (tzOffset === undefined)
      {
        tzOffset = this.constructor.__timezoneOffset;
      }
      
      // Convert the timezone offset to millisecond format
      tzOffset *= 60 * 1000;

      return (new Date(this.__date.getTime() + tzOffset)).getUTCMonth();
    },

    /**
     * Return the month of the date (universal time)
     *
     * @return {Integer}
     *   The month field of the date, in the range 0 (January) to 11 (December)
     */
    getUTCMonth : function()
    {
      return this.__date.getUTCMonth();
    },

    /**
     * Return the seconds field of the date
     *
     * @param tzOffset {Integer ? Current Timezone Offset}
     *   If not specified, the returned result will be in terms of the current
     *   timezone. If specified, this is the number of minutes of time zone
     *   offset difference from UTC. The number is positive to represent west of
     *   Greenwich, England; negative to represent east of Greenwich.
     *
     * @return {Integer}
     *   The seconds field of the date, in the range 0-59
     */
    getSeconds : function(tzOffset)
    {
      if (tzOffset === undefined)
      {
        tzOffset = this.constructor.__timezoneOffset;
      }
      
      // Convert the timezone offset to millisecond format
      tzOffset *= 60 * 1000;

      return (new Date(this.__date.getTime() + tzOffset)).getUTCSeconds();
    },

    /**
     * Return the seconds field of the date (universal time)
     *
     * @return {Integer}
     *   The seconds field of the date, in the range 0-59
     */
    getUTCSeconds : function()
    {
      return this.__date.getUTCSeconds();
    },

    /**
     * Return the millisecond representation of the date
     *
     * @return {Integer}
     *   The number of milliseconds since the beginning of the epoch, on
     *   midnight, 1 January 1970. If the date precedes the beginning of the
     *   epoch, the returned value will be negative.
     */
    getTime : function()
    {
      return this.__date.getTime();
    },
    
    /**
     * Format a date.
     *
     * @param tzOffset {Integer ? Current Timezone Offset}
     *   If not specified, the returned result will be in terms of the current
     *   timezone. If specified, this is the number of minutes of time zone
     *   offset difference from UTC. The number is positive to represent west of
     *   Greenwich, England; negative to represent east of Greenwich.
     *
     * @param fFormatter {Function ? this.getOutputFormatter()}
     *   A function which formats the date. If not specified, the formatter
     *   specified by the outputFormatter property is used.
     *
     * @return {String}
     *   The formatted date
     */
    format : function(tzOffset, fFormatter)
    {
      if (tzOffset === undefined)
      {
        tzOffset = this.constructor.__timezoneOffset;
      }
      
      if (fFormatter === undefined)
      {
        fFormatter = this.getOutputFormatter();
      }

      // Convert the timezone offset to millisecond format
      var tzOffsetMs = tzOffset * 60 * 1000;

      // Generate a date object for the specified time, and call the formatter
      return fFormatter(new Date(this.__date.getTime() - tzOffsetMs), tzOffset);
    },

    toString : function()
    {
      return this.format(0, this.getOutputFormatter());
    }
  },

  statics :
  {
    /**
     * Parse a date string
     *
     * @param dateString {String}
     *   A string matching an RFC2822 date (including the obsoleted forms) or
     *   an ISO8601 date. If no timezone portion is provided, UTC is assumed.
     *
     * @return {Integer}
     *   The number of milliseconds since midnight, 1 Jan 1970 UTC.
     */
    parse : function(dateString)
    {
      var time;

      try
      {
        time = this.__parseRfc2822(dateString);
      }
      catch (e)
      {
        this.debug("Failed to parse as RFC2822; trying ISO8601.");

        try
        {
          time = this.__parseIso8601(dateString);
        }
        catch (e)
        {
          this.debug("Failed to parse as ISO8601; trying native Date parse.");
          
          return Date.parse(dateString);
        }
      }
      
      return time;
    },

    __timezoneOffset : null,

    __monthNames :
      [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ],

    _formatRfc2822 : function(date, tzOffset)
    {
      var dayNames =
        [
          "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
        ];
      var dayName = dayNames[date.getUTCDay()];
      var day = ("00" + date.getUTCDate()).substr(-2);
      var monthName = 
        timezonedate.TimezoneDate.__monthNames[date.getUTCMonth()];
      var year = ("0000" + date.getUTCFullYear()).substr(-4);
      var hours = ("00" + date.getUTCHours()).substr(-2);
      var minutes = ("00" + date.getUTCMinutes()).substr(-2);
      var seconds = ("00" + date.getUTCSeconds()).substr(-2);
      var timezone;
      
      // Was a timezone specified, or was it 0?
      if (! tzOffset)
      {
        // Not specified or 0 means UTC, indicated by "GMT" in this format
        timezone = "GMT";
      }
      else
      {
        // Calculate and format the timezone offset
        var offsetSign = (tzOffset < 0 ? "-" : "+");
        var offsetHours = Math.floor(tzOffset / 60);
        var offsetMinutes = tzOffset % 60;
timezonedate.TimezoneDate.debug("_formatRfc2822 got tzOffset=" + tzOffset + ", offsetHours=" + offsetHours);
        timezone = 
          offsetSign +
          ("00" + offsetHours).substr(-2) +
          ("00" + offsetMinutes).substr(-2);
      }
      
      return (
        dayName + ", " +
        day + " " + monthName + " " + year + " " +
        hours + ":" + minutes + ":" + seconds + " " +
        timezone);
    },
    
    _formatIso8601 : function(date, tzOffset)
    {
      var year = ("0000" + date.getUTCFullYear()).substr(-4);
      var month = ("00" + (date.getUTCMonth() + 1)).substr(-2);
      var day = ("00" + date.getUTCDate()).substr(-2);
      var hours = ("00" + date.getUTCHours()).substr(-2);
      var minutes = ("00" + date.getUTCMinutes()).substr(-2);
      var seconds = ("00" + date.getUTCSeconds()).substr(-2);
      var timezone;

      // Was a timezone specified, or was it 0?
      if (! tzOffset)
      {
        // Not specified or 0 means UTC, indicated by "Z" in this format"
        timezone = "Z";
      }
      else
      {
        // Calculate and format the timezone offset
        var offsetSign = (tzOffset < 0 ? "-" : "+");
        var offsetHours = Math.floor(tzOffset / 60);
        var offsetMinutes = tzOffset % 60;
        timezone = 
          offsetSign +
          ("00" + offsetHours).substr(-2) +
          ":"
          ("00" + offsetMinutes).substr(-2);
      }
      
      return (
        year + "-" + month + "-" + day + 
        "T" + hours + ":" + minutes + ":" + seconds +
        timezone);
    },
    
    /**
     * Parse a date string in the format specified by RFC2822
     *
     * @param dateString {String}
     *   A string matching an RFC2822 date (including the obsoleted forms)
     *
     * @return {Integer}
     *   The number of milliseconds since midnight, 1 Jan 1970 UTC.
     *
     * @throws {Error}
     *   An Error is thrown if the provided string could not be parsed as an
     *   RFC2822 date string.
     */
    __parseRfc2822 : function(dateString)
    {
      // The calculated month value, 0-relative
      var month;

      // Enumerate the valid zone names, according to RFC-2822
      var zones =
        {
          "UT"  : 0,
          "GMT" : 0,
          "EST" : 5 * 60, 
          "EDT" : 4 * 60,
          "CST" : 6 * 60, 
          "CDT" : 5 * 60,
          "MST" : 7 * 60,
          "MDT" : 6 * 60,
          "PST" : 8 * 60, 
          "PDT" : 7 * 60
        };

      // The calculated timezone offset in minutes
      var timezoneOffset;

      // Check for an FRC2822 date
      var rfc2822 = 
        // Starting from the beginning of the string
        "^" +
    
        // 3-character day, and a comma and a single space
        "[A-Z][a-z][a-z], " +

        // 2-digit day of month, and a single space
        "([0-9]{2}) " +
    
        // 3-character capitalized month abbreviation, and a single space
        "([A-Z][a-z][a-z]) " +
    
        // 4-digit year and a single space
        "([0-9]{4}) " +
    
        // 6-digit time with colons after 2nd and 4th digits, and a single space
        "(([0-9]{2}):([0-9]{2}):([0-9]{2})) " +
    
        // 3-character upper-case time zone, or + or minus and 4-digit offset
        "(([A-Z][A-Z][A-Z])|([+-][0-9]{4}))" +

        // Completing at the end of the string
        "$";

      // Convert the string to a regular expression
      var regexp = new RegExp(rfc2822);
      
      // See if the provided date string matches
      var result = dateString.match(regexp);
      if (result == null)
      {
        throw new Error("Unrecognized date string: " + dateString);
      }

      //
      // The regular expression matches. Let's do some further testing.
      //

      // Does the month match one of the legal values?
      month = this.__monthNames.indexOf(result[2]);
      if (month == -1)
      {
        throw new Error("Unexpected month: " + result[2]);
      }

      var year = result[3];
      var day = result[1];
      var hours = result[5];
      var minutes = result[6];
      var seconds = result[7];
      var fullTimezone = result[8];
      var alphaTimezone = result[9];
      var numericTimezone = result[10];

      // What type of timezone was provided?
      if (alphaTimezone !== undefined)
      {
        // An alpha timezone was provided. Does it match a legal value?
        if (zones[alphaTimezone === undefined])
        {
          throw new Error("Unexpected zone name: " + result[8]);
        }

        timezoneOffset = zones[alphaTimezone];
      }
      else
      {
        // A numeric timezone was provided. Ensure hours and minutes values
        // are reasonable.
        var offsetHours = numericTimezone.substr(1, 2);
        var offsetMinutes = numericTimezone.substr(3, 2);
        
        if (offsetHours > 12 || offsetMinutes > 59)
        {
          throw new Error("Unrecognized time value: " + numericTimezone);
        }
        
        // Convert the hours and minutes to just minutes
        timezoneOffset = (offsetHours * 60) + offsetMinutes;
        
        // If the offset was negative...
        if (numericTimezone.substr(0, 1) == "-")
        {
          // ... then negate the timezone offset
          timezoneOffset = -timezoneOffset;
        }
      }

      // Get the number of milliseconds since 1 Jan 1970 UTC
      var time = (new Date(Date.UTC(year - 0, month - 0, day - 0, 
                                    hours - 0, minutes - 0, seconds - 0)));
      
      // Add in the timezone offset so that the value represents the
      // time in UTC.
      time += (timezoneOffset * 60 * 1000);
      
      // Give 'em what they came for!
      return time;
    },

    /**
     * Parse a date string in the format specified by ISO8601
     *
     * @param dateString {String}
     *   A string matching an ISO8601 date. (There is no support, however, for
     *   the 'W' option of week number.) If no timezone is specified, UTC is
     *   assumed.
     *
     * @return {Integer}
     *   The number of milliseconds since midnight, 1 Jan 1970 UTC.
     *
     * @throws {Error}
     *   An Error is thrown if the provided string could not be parsed as an
     *   ISO8601 date string.
     */
    __parseIso8601 : function(dateString)
    {
      // The calculated timezone offset in minutes
      var timezoneOffset = null;

      // Try to support the partial formats
      if (dateString.length == 4) // YYYY
      {
        dateString += "-01-01";   // convert to YYYY-MM-DD
      }
      else if (dateString.length == 7) // YYYY-MM
      {
        dateString += "-01";      // convert to YYYY-MM-DD
      }
      
      // Check for an ISO8601 date
      var iso8601 =
        // Starting from the beginning of the string
        "^" +
    
        // Year, month, and day.
        "([0-9]{4})-([0-9]{2})-([0-9]{2})" +

        // T followed by hours, minutes, and optional seconds and fractional
        // seconds. This whole time portion is optional.
        "(T([0-9]{2}):([0-9]{2})(:([0-9]{2})[.]([0-9]+)?)?)?" +

        // Optional time zone in +hh:mm format or Z
        "(([+-]([0-9]{2}):([0-9]{2}))|(Z))?" +

        // Completing at the end of the string
        "$";

      // Convert the string to a regular expression
      var regexp = new RegExp(iso8601);
      
      // See if the provided date string matches
      var result = dateString.match(regexp);
      if (result == null)
      {
        throw new Error("Unrecognized date string: " + dateString);
      }

      //
      // The regular expression matches. Let's do some further testing.
      //

      // Convert each of the string portions to appropriate types
      var year          = result[1] - 0;
      var month         = result[2] - 1; // months is 0-relative
      var day           = result[3] - 0;
      var fullTime      = result[4];
      var hours         = result[5] - 0;
      var minutes       = result[6] - 0;
      var seconds       = (result[8] || 0) - 0;
      var fractional    = ((result[9] || 0) + "000").substr(0, 3) - 0;
      var fullTimezone  = result[10];
      var offsetHours   = (result[12] || 0) - 0;
      var offsetMinutes = (result[13] || 0) - 0;
      var zulu          = result[14];
      
      // Ensure hours and minutes values are within bounds
      if (hours > 23 || minutes > 59)
      {
        throw new Error("Invalid time value: " + fullTime);
      }

      // Get the number of milliseconds since 1 Jan 1970 UTC,
      // ignoring for the time being, the timezone offset.
      var utc = Date.UTC(year, month, day,
                         hours, minutes, seconds, 
                         fractional);
      var time = new Date(utc).getTime();
      
      // If a timezone offset was provided...
      if (fullTimezone !== undefined &&
          offsetHours !== undefined &&
          offsetMinutes !== undefined)
      {
        // Ensure timezone hours and minutes are within bounds
        if (offsetHours <= -12 || offsetHours > 12 || offsetMinutes > 59)
        {
          throw new Error("Invalid timezone offset value: " + fullTimezone);
        }
        
        // We were given an hours and minutes offset from UTC.
        // Convert the hours and minutes to just minutes
        timezoneOffset = (offsetHours * 60) + offsetMinutes;
        
        // If the offset was negative...
        if (fullTimezone.substr(0, 1) == "-")
        {
          // ... then negate the timezone offset
          timezoneOffset = -timezoneOffset;
        }

        // Add in the timezone offset so that the value represents the
        // time in UTC.
        time += (timezoneOffset * 60 * 1000);
      }
      
      // Give 'em what they came for!
      return time;
    },
    
    debug : function()
    {
      qx.log.Logger.debug.apply(null, arguments);
    }
  },
  
  defer : function()
  {
    // Initialize the timezone offset
    this.__timezoneOffset = (new Date()).getTimezoneOffset();
  }
});
