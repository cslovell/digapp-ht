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

/* globals DigBehaviors, _ */
/* exported DigBehaviors */
var DigBehaviors = DigBehaviors || {};

/**
 * Polymer behavior for state-related utility functions.
 */
DigBehaviors.StateBehavior = {
  /**
   * Builds and returns the entity state object from the given config object.
   *
   * @param {Object} config
   * @return {Object}
   */
  buildEntityState: function(config) {
    return {
      age: config.age || [],
      email: config.email || [],
      ethnicity: config.ethnicity || [],
      eyeColor: config.eyeColor || [],
      gender: config.gender || [],
      hairColor: config.hairColor || [],
      height: config.height || [],
      location: config.location || [],
      name: config.name || [],
      phone: config.phone || [],
      price: config.price || [],
      publisher: config.publisher || [],
      services: config.services || [],
      weight: config.weight || []
    };
  },

  /**
   * Builds and returns the search state object from the given config object.
   *
   * @param {Object} config
   * @return {Object}
   */
  buildSearchState: function(config) {
    return {
      age: config.age || {},
      city: config.city || {},
      country: config.country || {},
      dateEnd: config.dateEnd || {},
      dateStart: config.dateStart || {},
      description: config.description || {},
      email: config.email || {},
      ethnicity: config.ethnicity || {},
      eyeColor: config.eyeColor || {},
      gender: config.gender || {},
      hairColor: config.hairColor || {},
      height: config.height || {},
      image: config.image || {},
      location: config.location || {},
      name: config.name || {},
      phone: config.phone || {},
      price: config.price || {},
      region: config.region || {},
      services: config.services || {},
      title: config.title || {},
      website: config.website || {},
      weight: config.weight || {},
      sort: config.sort || ''
    };
  }
};
