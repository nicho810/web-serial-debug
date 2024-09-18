document.addEventListener('DOMContentLoaded', function() {
    const serialOptions = document.getElementById('serial-options');
    
    const optionsHTML = `
        <div class="collapse show p-2 float-start">
            <div class="input-group mb-3">
                <span class="input-group-text">波特率</span>
                <select id="serial-baud" class="form-select">
                    ${[110, 300, 600, 1200, 2400, 4800, 7200, 9600, 14400, 19200, 28800, 38400, 56000, 57600, 76800, 115200, 230400, 460800]
                        .map(rate => `<option value="${rate}" ${rate === 115200 ? 'selected' : ''}>${rate}</option>`).join('')}
                </select>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">数据位</span>
                <select class="form-select" id="serial-data-bits">
                    <option>8</option>
                    <option>7</option>
                </select>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">停止位</span>
                <select class="form-select" id="serial-stop-bits">
                    <option>1</option>
                    <option>2</option>
                </select>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">校验位</span>
                <select class="form-select" id="serial-parity">
                    <option value="none">None</option>
                    <option value="even">Even</option>
                    <option value="odd">Odd</option>
                </select>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">缓冲区</span>
                <input type="number" id="serial-buffer-size" class="form-control" placeholder="缓冲区大小"
                    list="buffer-size-list" max="1677216" value="1024">
                <datalist id="buffer-size-list">
                    ${[255, 512, 1024, 2048, 4096, 8192]
                        .map(size => `<option>${size}</option>`).join('')}
                </datalist>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">流控制</span>
                <select class="form-select" id="serial-flow-control">
                    <option value="none">None</option>
                    <option value="hardware">HardWare</option>
                </select>
            </div>

            <div class="d-flex mt-2">
                <button class="btn btn-secondary me-3" id="serial-select-port">选择串口</button>
                <button class="btn btn-primary flex-grow-1" id="serial-open-or-close">打开串口</button>
            </div>

            <div id="serial-status" class="mt-2">
                <div class="alert alert-info" role="alert">
                    未选择串口
                </div>
            </div>
        </div>
        <button class="toggle-button float-end" title="隐藏/打开边栏">
            <i class="bi bi-chevron-compact-left"></i>
        </button>
    `;

    serialOptions.innerHTML = optionsHTML;

    // Add event listeners and other functionality here
    // For example:
    document.getElementById('serial-select-port').addEventListener('click', function() {
        // Handle port selection
    });

    document.getElementById('serial-open-or-close').addEventListener('click', function() {
        // Handle opening/closing the serial port
    });

    // ... Add more event listeners and functionality as needed
});
