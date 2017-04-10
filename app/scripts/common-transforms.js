/*
 * Copyright 2017 Next Century Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Common transform functions used.
 */

/* exported commonTransforms */
/* jshint camelcase:false */

var commonTransforms = (function(_, moment, typeBehavior) {

  /**
   * Returns the iron icon for the given type.
   */
  function getIronIcon(type) {
    return typeBehavior.getTypeIcon(type);
  }

  /**
   * Returns the link for the given ID and type.
   */
  function getLink(id, type) {
    return typeBehavior.getPageLink(id, type);
  }

  /**
   * Returns the style class for the given type.
   */
  function getStyleClass(type) {
    return typeBehavior.getTypeStyleClass(type);
  }

  /**
   * Returns the formatted telephone number.
   */
  function getFormattedPhone(phone) {
    var output = phone;
    // Remove United States or X country code.
    output = (output.indexOf('+1-') === 0 ? output.substring(output.indexOf('+1-') + 3) : output);
    output = (output.indexOf('+x-') === 0 ? output.substring(output.indexOf('+x-') + 3) : output);
    return output.replace(/(\d{0,4})-?(\d{3})(\d{3})(\d{4})/, function(match, p1, p2, p3, p4) {
      if(p2 && p3 && p4) {
        return (p1 ? p1 + '-' : '') + p2 + '-' + p3 + '-' + p4;
      }
      return p1 + p2 + p3 + p4;
    });
  }

  /**
   * Returns the location data from the given ID formatted as city:state:country:longitude:latitude.
   */
  function getLocationDataFromId(id) {
    var idList = id ? id.split(':') : [];

    // TODO We should return an empty object if the ID is formatted incorrectly once the extractions are improved.
    if(!idList.length) {
      return {
        city: id,
        text: id
      };
    }

    var city = idList[0];
    var state = idList.length > 1 ? idList[1] : undefined;
    var country = idList.length > 2 ? idList[2] : undefined;
    var longitude = idList.length > 3 ? idList[3] : undefined;
    var latitude = idList.length > 4 ? idList[4] : undefined;
    var text = city ? (city + (state ? (', ' + state) : '')) : 'Unknown Location(s)';

    return {
      city: city,
      country: country,
      latitude: latitude,
      longitude: longitude,
      state: state,
      text: text
    };
  }

  function isGoodLocation(location) {
    return location.latitude && location.longitude && location.text;
  }

  /**
  * Changes the key/value names of buckets given from an aggregation
  * to names preferred by the user.
  */
  return {
    /**
     * Returns the string for the given date number/string in UTC format.
     */
    getDate: function(date) {
      if(date) {
        return moment.utc(new Date(date)).format('MMM D, YYYY');
      }
    },

    /**
     * Returns the formatted telephone number.
     */
    getFormattedPhone: function(phone) {
      return getFormattedPhone(phone);
    },

    /**
     * Returns the iron icon for the given type.
     */
    getIronIcon: function(type) {
      return getIronIcon(type);
    },

    /**
     * Returns the link for the given ID and type.
     */
    getLink: function(id, type) {
      return getLink(id, type);
    },

    /**
     * Returns the location data from the given ID formatted as city:state:country:longitude:latitude.
     */
    getLocationDataFromId: function(id) {
      return getLocationDataFromId(id);
    },

    /**
     * Returns the style class for the given type.
     */
    getStyleClass: function(type) {
      return getStyleClass(type);
    },

    /**
     * Returns whether the given location has the correct properties.
     */
    isGoodLocation: function(location) {
      return isGoodLocation(location);
    }
  };
});
