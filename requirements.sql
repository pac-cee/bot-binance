
-- If using TimescaleDB, convert table to hypertable:
-- SELECT create_hypertable('asset_prices', 'timestamp');
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='asset_prices' AND xtype='U')
CREATE TABLE asset_prices (
    id INT IDENTITY(1,1) PRIMARY KEY,
    symbol NVARCHAR(20) NOT NULL,
    asset_type NVARCHAR(10) NOT NULL, -- crypto, stock, forex
    price DECIMAL(18,8) NOT NULL,
    timestamp DATETIME2 NOT NULL
);