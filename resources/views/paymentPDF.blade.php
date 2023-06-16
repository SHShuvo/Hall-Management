<!DOCTYPE html>
<html>
<head>
    <title>Payment</title>
</head>
<body>
    <div>
        <table style="width:100%">
            <tbody>
                <tr>
                    <td width="100%" style="text-align: center; vertical-align: baseline;">
                        <div style="font-weight:bold; font-size:22px;">Pabna University of Science and Technology</div>
                        <div>Bangabandhu Sheikh Mujibur Rahman Hall</div>
                        <div>Rajapur, Pabna-6600</div>
                        <div style="margin-top: 15px;"><span style="font-weight: bold;">Date Range: </span>{{$from_date}} to {{$to_date}}</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div style="margin-top: 20px;">
        <table style="width:100%; font-size:14px;" cellspacing ="0">
            <thead>
                <tr style="background: #f2c399;">
                    <th style="text-align:left; border: 1px solid;padding:4px;">SN.</th>
                    <th style="text-align:left; border: 1px solid;padding:4px;">Student Name</th>
                    <th style="text-align:left; border: 1px solid;padding:4px;">Student Roll</th>
                    <th style="text-align:left; border: 1px solid;padding:4px;">Payment Amount(Tk.)</th>
                    <th style="text-align:left; border: 1px solid;padding:4px;">Payment Date</th>
                </tr>
            </thead>
            <tbody>
            @foreach($data as $index => $dt)
                <tr>
                    <td style="text-align:left; border: 1px solid;padding:4px;">{{$index+1}}</td>
                    <td style="text-align:left; border: 1px solid;padding:4px;">{{$dt->user->name}}</td>
                    <td style="text-align:left; border: 1px solid;padding:4px;">{{$dt->user->roll}}</td>
                    <td style="text-align:right; border: 1px solid;padding:4px;">{{$dt->amount}}</td>
                    <td style="text-align:left; border: 1px solid;padding:4px;">{{$dt->date}}</td>
                </tr>
            @endforeach
            </tbody>
            <tfoot>
                <tr style="background: #f2c399;">
                    <th style="text-align:left; border: 1px solid;padding:4px;" colspan="3">Total</th>
                    <th style="text-align:right; border: 1px solid;padding:4px;">{{$total}}</th>
                    <th style="text-align:left; border: 1px solid;padding:4px;"></th>
                </tr>
            </tfoot>
        </table>
    </div>    
    <div style="text-align: right; font-style: italic; font-size:13px; margin-top:30px;">
        <span>This certificate has been generated electrically</span>
    </div>
</body>
</html>