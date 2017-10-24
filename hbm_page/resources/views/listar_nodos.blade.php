@extends('cabecera')


@push('js')

{!! Html::script('js/json_libreria/d3.js') !!}
{!! Html::script('js/json_libreria/d3.min.js') !!}

<script type="text/javascript">
     $(document).ready(function() {
	     var ruta = "{{$ruta['ruta']}}";
		 var nodo = "{{$ruta['nodo']}}";
		 console.log(nodo+'  '+ruta);
		// convertir_csv(nodo,ruta);
     	 //obtener_nodos();
    })
  </script>

@endpush



@section('contenido')

<b>asd</b>
@endsection