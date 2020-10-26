module.exports = function(sequelize, DataTypes) {
  const Membership = sequelize.define(
    'memberships',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      discount_value: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      discount_quota: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      discount_is_percentage: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      published: {
        allowNull: true,
        type: DataTypes.BOOLEAN
      },
      expiry_in: {
        allowNull: true,
        type: DataTypes.INTEGER
      },
    },
    {
      timestamps: true,
      underscored: true
    }
  );

  // eslint-disable-next-line no-unused-vars
  Membership.associate = function(models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    Membership.belongsTo(models.own_memberships, {
      foreignKey: 'membership_id',
      as: 'membership'
    });
  };

  return Membership;
};
