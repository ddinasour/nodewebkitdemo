module.exports = function (orm, db) {
  var Message = db.define('message', {
    title     : { type: 'text', required: true },
    body      : { type: 'text', required: true,  big:  true },
    createdAt : { type: 'date', required: true, time: true }
  },
  {
    hooks: {
      beforeValidation: function () {
        this.createdAt = new Date();
      }
    },
    validations: {
      title: [
        orm.enforce.ranges.length(1, undefined, "must be atleast 1 letter long"),
        orm.enforce.ranges.length(undefined, 96, "cannot be longer than 96 letters")
      ],
      body: [
        orm.enforce.ranges.length(1, undefined, "must be atleast 1 letter long"),
        orm.enforce.ranges.length(undefined, 32768, "cannot be longer than 32768 letters")
      ]
    },
    methods: {
      serialize: function () {
        var comments;

        if (this.comments) {
          comments = this.comments.map(function (c) { return c.serialize(); });
        } else {
          comments = [];
        }

        return {
          id        : this.id,
          title     : this.title,
          body      : this.body,
          createdAt : "2014-02-28 00:00:00",
          comments  : comments
        };
      }
    }
  });
};
